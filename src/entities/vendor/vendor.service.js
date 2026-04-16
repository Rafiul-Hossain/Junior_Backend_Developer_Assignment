import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const createVendorProfileService = async (userId, data) => {
  const existing = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (existing) throw new Error('Vendor profile already exists');

  // Upgrade user role to VENDOR
  await prisma.user.update({ where: { id: userId }, data: { role: 'VENDOR' } });

  const profile = await prisma.vendorProfile.create({
    data: { userId, farmName: data.farmName, farmLocation: data.farmLocation }
  });
  return profile;
};

export const getMyVendorProfileService = async (userId) => {
  const profile = await prisma.vendorProfile.findUnique({
    where: { userId },
    include: { produces: true, rentalSpaces: true, sustainabilityCerts: true }
  });
  if (!profile) throw new Error('Vendor profile not found');
  return profile;
};

export const updateVendorProfileService = async (userId, data) => {
  const profile = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!profile) throw new Error('Vendor profile not found');

  return prisma.vendorProfile.update({
    where: { userId },
    data: { farmName: data.farmName, farmLocation: data.farmLocation }
  });
};

export const getAllVendorsService = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const search = query.search || '';

  const where = search ? { farmName: { contains: search, mode: 'insensitive' } } : {};

  const [vendors, total] = await Promise.all([
    prisma.vendorProfile.findMany({
      where,
      skip,
      take: limit,
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.vendorProfile.count({ where })
  ]);

  return { vendors, pagination: createPaginationInfo(page, limit, total) };
};
