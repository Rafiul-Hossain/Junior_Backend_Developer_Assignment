import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const createRentalSpaceService = async (userId, data) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  return prisma.rentalSpace.create({
    data: {
      vendorId: vendor.id,
      location: data.location,
      size: data.size,
      pricePerMonth: parseFloat(data.pricePerMonth),
      description: data.description || null
    }
  });
};

export const getAllRentalSpacesService = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = { availability: true };

  if (query.location) where.location = { contains: query.location, mode: 'insensitive' };

  const [spaces, total] = await Promise.all([
    prisma.rentalSpace.findMany({
      where, skip, take: limit,
      include: { vendor: { select: { farmName: true, farmLocation: true } } },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.rentalSpace.count({ where })
  ]);

  return { spaces, pagination: createPaginationInfo(page, limit, total) };
};

export const getRentalSpaceByIdService = async (id) => {
  const space = await prisma.rentalSpace.findUnique({
    where: { id },
    include: { vendor: { include: { user: { select: { name: true, email: true } } } } }
  });
  if (!space) throw new Error('Rental space not found');
  return space;
};

export const updateRentalSpaceService = async (userId, spaceId, data) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor not found');

  const space = await prisma.rentalSpace.findFirst({ where: { id: spaceId, vendorId: vendor.id } });
  if (!space) throw new Error('Space not found or unauthorized');

  return prisma.rentalSpace.update({
    where: { id: spaceId },
    data: {
      location: data.location || space.location,
      size: data.size || space.size,
      pricePerMonth: data.pricePerMonth ? parseFloat(data.pricePerMonth) : space.pricePerMonth,
      availability: data.availability !== undefined ? data.availability : space.availability
    }
  });
};
