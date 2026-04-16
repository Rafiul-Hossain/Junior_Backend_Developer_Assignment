import express from 'express';
import { registerUser, loginUser, refreshAccessToken, forgetPassword, verifyCode, resetPassword, changePassword, logoutUser } from './auth.controller.js';
import { verifyToken } from '../../core/middlewares/authMiddleware.js';
import { authLimiter, emailVerificationLimiter } from '../../lib/limit.js';

const router = express.Router();

router.post('/register', authLimiter, registerUser);
router.post('/login', authLimiter, loginUser);
router.post('/refresh-access-token', refreshAccessToken);
router.post('/forget-password', emailVerificationLimiter, forgetPassword);
router.post('/verify-code', verifyCode);
router.post('/reset-password', resetPassword);
router.post('/change-password', verifyToken, changePassword);
router.post('/logout', verifyToken, logoutUser);

export default router;
