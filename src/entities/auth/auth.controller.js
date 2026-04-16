import { generateResponse } from '../../lib/responseFormate.js';
import {
  registerUserService, loginUserService, refreshAccessTokenService,
  forgetPasswordService, verifyCodeService, resetPasswordService,
  changePasswordService
} from './auth.service.js';
import prisma from '../../lib/prisma.js';

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const data = await registerUserService({ name, email, password, role });
    generateResponse(res, 201, true, 'Registered successfully!', data);
  } catch (error) {
    if (error.message === 'User already registered.') return generateResponse(res, 400, false, error.message, null);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await loginUserService({ email, password });
    generateResponse(res, 200, true, 'Login successful', data);
  } catch (error) {
    const clientErrors = ['Email and password are required', 'User not found', 'Invalid password', 'Account suspended'];
    if (clientErrors.includes(error.message)) return generateResponse(res, 400, false, error.message, null);
    next(error);
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await refreshAccessTokenService(refreshToken);
    generateResponse(res, 200, true, 'Token refreshed', tokens);
  } catch (error) {
    generateResponse(res, 400, false, error.message, null);
  }
};

export const forgetPassword = async (req, res, next) => {
  try {
    await forgetPasswordService(req.body.email);
    generateResponse(res, 200, true, 'OTP sent to your email', null);
  } catch (error) {
    generateResponse(res, 400, false, error.message, null);
  }
};

export const verifyCode = async (req, res, next) => {
  try {
    await verifyCodeService(req.body);
    generateResponse(res, 200, true, 'OTP verified successfully', null);
  } catch (error) {
    generateResponse(res, 400, false, error.message, null);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    await resetPasswordService(req.body);
    generateResponse(res, 200, true, 'Password reset successfully', null);
  } catch (error) {
    generateResponse(res, 400, false, error.message, null);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    await changePasswordService({ userId: req.user.id, ...req.body });
    generateResponse(res, 200, true, 'Password changed successfully', null);
  } catch (error) {
    generateResponse(res, 400, false, error.message, null);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    await prisma.user.update({ where: { id: req.user.id }, data: { refreshToken: null } });
    generateResponse(res, 200, true, 'Logged out successfully', null);
  } catch (error) {
    next(error);
  }
};
