import express from 'express';
import { getMyProfile, updateMyProfile } from './user.controller.js';
import { verifyToken } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/me', verifyToken, getMyProfile);
router.put('/me', verifyToken, updateMyProfile);

export default router;
