import express from 'express';
import { createVendorProfile, getMyVendorProfile, updateVendorProfile, getAllVendors } from './vendor.controller.js';
import { verifyToken, vendorMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createVendorProfile);                          // any user can become vendor
router.get('/me', verifyToken, vendorMiddleware, getMyVendorProfile);        // my vendor profile
router.put('/me', verifyToken, vendorMiddleware, updateVendorProfile);       // update my profile
router.get('/', getAllVendors);                                               // public: list all vendors

export default router;
