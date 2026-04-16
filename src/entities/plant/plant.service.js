import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const createPlantTrackingService = async (userId, data) => {
  const space = await prisma.rentalSpace.findUnique({ where: { id: data.rentalSpaceId } });
  if (!space) throw new Error('Rental space not found');

  return prisma.plantTracking.create({
    data: {
      userId,
      rentalSpaceId: data.rentalSpaceId,
      plantName: data.plantName,
      growthStage: data.growthStage,
      healthStatus: data.healthStatus,
      harvestDate: data.harvestDate ? new Date(data.harvestDate) : null,
      notes: data.notes || null
    }
  });
};

export const getMyPlantsService = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  const [plants, total] = await Promise.all([
    prisma.plantTracking.findMany({
      where: { userId },
      skip, take: limit,
      include: { rentalSpace: { select: { location: true, size: true } } },
      orderBy: { updatedAt: 'desc' }
    }),
    prisma.plantTracking.count({ where: { userId } })
  ]);

  return { plants, pagination: createPaginationInfo(page, limit, total) };
};

export const updatePlantTrackingService = async (userId, plantId, data) => {
  const plant = await prisma.plantTracking.findFirst({ where: { id: plantId, userId } });
  if (!plant) throw new Error('Plant tracking not found');

  return prisma.plantTracking.update({
    where: { id: plantId },
    data: {
      growthStage: data.growthStage || plant.growthStage,
      healthStatus: data.healthStatus || plant.healthStatus,
      harvestDate: data.harvestDate ? new Date(data.harvestDate) : plant.harvestDate,
      notes: data.notes !== undefined ? data.notes : plant.notes,
      imageUrl: data.imageUrl || plant.imageUrl
    }
  });
};
