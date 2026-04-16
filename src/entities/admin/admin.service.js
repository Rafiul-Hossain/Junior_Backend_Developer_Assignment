import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const getAllUsersService = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = {};
  if (query.role) where.role = query.role;
  if (query.status) where.status = query.status;

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where, skip, take: limit,
      select: { id: true, name: true, email: true, role: true, status: true, createdAt: true },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.user.count({ where })
  ]);

  return { users, pagination: createPaginationInfo(page, limit, total) };
};

export const updateUserStatusService = async (userId, status) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  return prisma.user.update({ where: { id: userId }, data: { status } });
};

export const approveVendorService = async (vendorProfileId) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { id: vendorProfileId } });
  if (!vendor) throw new Error('Vendor not found');

  return prisma.vendorProfile.update({
    where: { id: vendorProfileId },
    data: { isApproved: true }
  });
};

export const getDashboardStatsService = async () => {
  const [totalUsers, totalVendors, totalProduce, totalOrders, pendingCerts] = await Promise.all([
    prisma.user.count(),
    prisma.vendorProfile.count(),
    prisma.produce.count(),
    prisma.order.count(),
    prisma.sustainabilityCert.count({ where: { status: 'PENDING' } })
  ]);

  return { totalUsers, totalVendors, totalProduce, totalOrders, pendingCerts };
};

export const approveCertForProduceService = async (produceId, status) => {
  return prisma.produce.update({
    where: { id: produceId },
    data: { certificationStatus: status }
  });
};
