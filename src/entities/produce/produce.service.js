import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const createProduceService = async (userId, data) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');
  if (!vendor.isApproved) throw new Error('Vendor not approved yet');

  return prisma.produce.create({
    data: {
      vendorId: vendor.id,
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      category: data.category,
      availableQuantity: parseInt(data.availableQuantity),
      imageUrl: data.imageUrl || null
    }
  });
};

export const getAllProduceService = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = {};

  if (query.search) where.name = { contains: query.search, mode: 'insensitive' };
  if (query.category) where.category = query.category;
  if (query.certified === 'true') where.certificationStatus = 'APPROVED';

  const [produces, total] = await Promise.all([
    prisma.produce.findMany({
      where,
      skip,
      take: limit,
      include: { vendor: { select: { farmName: true, farmLocation: true } } },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.produce.count({ where })
  ]);

  return { produces, pagination: createPaginationInfo(page, limit, total) };
};

export const getProduceByIdService = async (id) => {
  const produce = await prisma.produce.findUnique({
    where: { id },
    include: { vendor: { include: { user: { select: { name: true } } } } }
  });
  if (!produce) throw new Error('Produce not found');
  return produce;
};

export const updateProduceService = async (userId, produceId, data) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  const produce = await prisma.produce.findFirst({ where: { id: produceId, vendorId: vendor.id } });
  if (!produce) throw new Error('Produce not found or unauthorized');

  return prisma.produce.update({
    where: { id: produceId },
    data: {
      name: data.name || produce.name,
      description: data.description || produce.description,
      price: data.price ? parseFloat(data.price) : produce.price,
      availableQuantity: data.availableQuantity !== undefined ? parseInt(data.availableQuantity) : produce.availableQuantity,
      category: data.category || produce.category
    }
  });
};

export const deleteProduceService = async (userId, produceId) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  const produce = await prisma.produce.findFirst({ where: { id: produceId, vendorId: vendor.id } });
  if (!produce) throw new Error('Produce not found or unauthorized');

  await prisma.produce.delete({ where: { id: produceId } });
};
