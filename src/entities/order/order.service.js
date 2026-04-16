import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const createOrderService = async (userId, data) => {
  const produce = await prisma.produce.findUnique({ where: { id: data.produceId } });
  if (!produce) throw new Error('Produce not found');
  if (produce.availableQuantity < data.quantity) throw new Error('Insufficient quantity available');

  const totalPrice = parseFloat(produce.price) * parseInt(data.quantity);

  const order = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        userId,
        produceId: data.produceId,
        vendorId: produce.vendorId,
        quantity: parseInt(data.quantity),
        totalPrice
      },
      include: { produce: { select: { name: true, price: true } } }
    });

    await tx.produce.update({
      where: { id: data.produceId },
      data: { availableQuantity: { decrement: parseInt(data.quantity) } }
    });

    return newOrder;
  });

  return order;
};

export const getMyOrdersService = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where: { userId },
      skip, take: limit,
      include: {
        produce: { select: { name: true, price: true, imageUrl: true } }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.order.count({ where: { userId } })
  ]);

  return { orders, pagination: createPaginationInfo(page, limit, total) };
};

export const cancelOrderService = async (userId, orderId) => {
  const order = await prisma.order.findFirst({ where: { id: orderId, userId } });
  if (!order) throw new Error('Order not found');
  if (order.status !== 'PENDING') throw new Error('Only pending orders can be cancelled');

  await prisma.$transaction(async (tx) => {
    await tx.order.update({ where: { id: orderId }, data: { status: 'CANCELLED' } });
    await tx.produce.update({
      where: { id: order.produceId },
      data: { availableQuantity: { increment: order.quantity } }
    });
  });
};

export const updateOrderStatusService = async (vendorUserId, orderId, status) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId: vendorUserId } });
  if (!vendor) throw new Error('Vendor not found');

  const order = await prisma.order.findFirst({ where: { id: orderId, vendorId: vendor.id } });
  if (!order) throw new Error('Order not found');

  return prisma.order.update({ where: { id: orderId }, data: { status } });
};
