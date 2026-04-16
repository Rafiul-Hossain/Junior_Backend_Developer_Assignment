import { generateResponse } from '../../lib/responseFormate.js';
import {
  createBookingService,
  getMyBookingsService,
  getBookingByIdService,
  cancelBookingService,
  getVendorBookingsService,
  updateBookingStatusService
} from './rental.booking.service.js';

export const createBooking = async (req, res, next) => {
  try {
    const data = await createBookingService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Rental space booked successfully', data);
  } catch (error) {
    const clientErrors = [
      'Rental space not found',
      'Rental space is not available',
      'End date must be after start date',
      'Start date cannot be in the past',
      'Rental space is already booked for this period'
    ];
    if (clientErrors.includes(error.message)) {
      return generateResponse(res, 400, false, error.message, null);
    }
    next(error);
  }
};

export const getMyBookings = async (req, res, next) => {
  try {
    const data = await getMyBookingsService(req.user.id, req.query);
    generateResponse(res, 200, true, 'Bookings fetched', data);
  } catch (error) {
    next(error);
  }
};

export const getBookingById = async (req, res, next) => {
  try {
    const data = await getBookingByIdService(req.user.id, req.params.id);
    generateResponse(res, 200, true, 'Booking fetched', data);
  } catch (error) {
    if (error.message === 'Booking not found') {
      return generateResponse(res, 404, false, error.message, null);
    }
    next(error);
  }
};

export const cancelBooking = async (req, res, next) => {
  try {
    const data = await cancelBookingService(req.user.id, req.params.id);
    generateResponse(res, 200, true, 'Booking cancelled', data);
  } catch (error) {
    const clientErrors = [
      'Booking not found',
      'Booking already cancelled',
      'Cannot cancel a completed booking'
    ];
    if (clientErrors.includes(error.message)) {
      return generateResponse(res, 400, false, error.message, null);
    }
    next(error);
  }
};

export const getVendorBookings = async (req, res, next) => {
  try {
    const data = await getVendorBookingsService(req.user.id, req.query);
    generateResponse(res, 200, true, 'Vendor bookings fetched', data);
  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus = async (req, res, next) => {
  try {
    const data = await updateBookingStatusService(req.user.id, req.params.id, req.body.status);
    generateResponse(res, 200, true, 'Booking status updated', data);
  } catch (error) {
    if (error.message === 'Booking not found') {
      return generateResponse(res, 404, false, error.message, null);
    }
    next(error);
  }
};
