import express from 'express';
import { createRentalSpace, getAllRentalSpaces, getRentalSpaceById, updateRentalSpace } from './rental.controller.js';
import { verifyToken, vendorMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllRentalSpaces);                                         // public
router.get('/:id', getRentalSpaceById);                                     // public
router.post('/', verifyToken, vendorMiddleware, createRentalSpace);         // vendor only
router.put('/:id', verifyToken, vendorMiddleware, updateRentalSpace);       // vendor only

export default router;
