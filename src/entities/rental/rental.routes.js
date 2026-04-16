import express from 'express';
import { createRentalSpace, getAllRentalSpaces, getRentalSpaceById, updateRentalSpace } from './rental.controller.js';
import {
  createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking,
  getVendorBookings,
  updateBookingStatus
} from './rental.booking.controller.js';
import { verifyToken, vendorMiddleware, customerMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// -- Rental Space Routes --
router.get('/', getAllRentalSpaces);
router.get('/:id', getRentalSpaceById);
router.post('/', verifyToken, vendorMiddleware, createRentalSpace);
router.put('/:id', verifyToken, vendorMiddleware, updateRentalSpace);

// -- Booking Routes --
router.post('/bookings', verifyToken, customerMiddleware, createBooking);           // customer books a space
router.get('/bookings/my', verifyToken, customerMiddleware, getMyBookings);         // customer views own bookings
router.get('/bookings/vendor', verifyToken, vendorMiddleware, getVendorBookings);   // vendor views bookings on their spaces
router.get('/bookings/:id', verifyToken, getBookingById);                           // get single booking
router.patch('/bookings/:id/cancel', verifyToken, customerMiddleware, cancelBooking);           // customer cancels
router.patch('/bookings/:id/status', verifyToken, vendorMiddleware, updateBookingStatus);       // vendor confirms/completes

export default router;
