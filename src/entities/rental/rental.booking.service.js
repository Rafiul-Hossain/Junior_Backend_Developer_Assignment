import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

// Calculate number of months between two dates
const calculateMonths = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  return Math.max(1, months);
};

export const createBookingService = async (customerId, data) => {
  const space = await prisma.rentalSpace.findUnique({
    where: { id: data.rentalSpaceId }
  });
  if (!space) throw new Error('Rental space not found');
  if (!space.availability) throw new Error('Rental space is not available');

  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);

  if (startDate >= endDate) throw new Error('End date must be after start date');
  if (startDate < new Date()) throw new Error('Start date cannot be in the past');

  // Check if space is already booked for this period
  const conflict = await prisma.rentalBooking.findFirst({
    where: {
      rentalSpaceId: data.rentalSpaceId,
      status: { in: ['PENDING', 'CONFIRMED'] },
      AND: [
        { startDate: { lt: endDate } },
        { endDate: { gt: startDate } }
      ]
    }
  });
  if (conflict) throw new Error('Rental space is already booked for this period');

  const months = calculateMonths(startDate, endDate);
  const totalPrice = parseFloat(space.pricePerMonth) * months;

  const booking = await prisma.rentalBooking.create({
    data: {
      customerId,
      rentalSpaceId: data.rentalSpaceId,
      startDate,
      endDate,
      totalPrice,
      notes: data.notes || null
    },
    include: {
      rentalSpace: {
        select: { location: true, size: true, pricePerMonth: true }
      }
    }
  });

  return booking;
};

export const getMyBookingsService = async (customerId, query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = { customerId };
  if (query.status) where.status = query.status;

  const [bookings, total] = await Promise.all([
    prisma.rentalBooking.findMany({
      where,
      skip,
      take: limit,
      include: {
        rentalSpace: {
          select: { location: true, size: true, pricePerMonth: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.rentalBooking.count({ where })
  ]);

  return { bookings, pagination: createPaginationInfo(page, limit, total) };
};

export const getBookingByIdService = async (customerId, bookingId) => {
  const booking = await prisma.rentalBooking.findFirst({
    where: { id: bookingId, customerId },
    include: {
      rentalSpace: {
        include: {
          vendor: { select: { farmName: true, farmLocation: true } }
        }
      }
    }
  });
  if (!booking) throw new Error('Booking not found');
  return booking;
};

export const cancelBookingService = async (customerId, bookingId) => {
  const booking = await prisma.rentalBooking.findFirst({
    where: { id: bookingId, customerId }
  });
  if (!booking) throw new Error('Booking not found');
  if (booking.status === 'CANCELLED') throw new Error('Booking already cancelled');
  if (booking.status === 'COMPLETED') throw new Error('Cannot cancel a completed booking');

  return prisma.rentalBooking.update({
    where: { id: bookingId },
    data: { status: 'CANCELLED' }
  });
};

// Vendor: view bookings for their rental spaces
export const getVendorBookingsService = async (userId, query) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  const { page, limit, skip } = getPaginationParams(query);

  const spaceIds = await prisma.rentalSpace.findMany({
    where: { vendorId: vendor.id },
    select: { id: true }
  });
  const ids = spaceIds.map(s => s.id);

  const where = { rentalSpaceId: { in: ids } };
  if (query.status) where.status = query.status;

  const [bookings, total] = await Promise.all([
    prisma.rentalBooking.findMany({
      where,
      skip,
      take: limit,
      include: {
        customer: { select: { name: true, email: true } },
        rentalSpace: { select: { location: true, size: true } }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.rentalBooking.count({ where })
  ]);

  return { bookings, pagination: createPaginationInfo(page, limit, total) };
};

// Vendor: confirm or complete a booking
export const updateBookingStatusService = async (userId, bookingId, status) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  const spaceIds = await prisma.rentalSpace.findMany({
    where: { vendorId: vendor.id },
    select: { id: true }
  });
  const ids = spaceIds.map(s => s.id);

  const booking = await prisma.rentalBooking.findFirst({
    where: { id: bookingId, rentalSpaceId: { in: ids } }
  });
  if (!booking) throw new Error('Booking not found');

  const updated = await prisma.rentalBooking.update({
    where: { id: bookingId },
    data: { status }
  });

  // If confirmed, mark rental space as unavailable
  if (status === 'CONFIRMED') {
    await prisma.rentalSpace.update({
      where: { id: booking.rentalSpaceId },
      data: { availability: false }
    });
  }

  // If completed or cancelled, mark rental space as available again
  if (status === 'COMPLETED' || status === 'CANCELLED') {
    await prisma.rentalSpace.update({
      where: { id: booking.rentalSpaceId },
      data: { availability: true }
    });
  }

  return updated;
};
