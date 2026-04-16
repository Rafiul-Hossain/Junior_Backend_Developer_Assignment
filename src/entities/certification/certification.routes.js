import express from 'express';
import {
  submitCertification, getMyCertifications,
  getAllCertifications, approveCertification
} from './certification.controller.js';
import { verifyToken, vendorMiddleware, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, vendorMiddleware, submitCertification);            // vendor submits
router.get('/my', verifyToken, vendorMiddleware, getMyCertifications);           // vendor views own
router.get('/', verifyToken, adminMiddleware, getAllCertifications);             // admin views all
router.patch('/:id/approve', verifyToken, adminMiddleware, approveCertification); // admin approves/rejects

export default router;
