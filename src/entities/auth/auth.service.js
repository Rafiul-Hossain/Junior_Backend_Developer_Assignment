import bcrypt from 'bcrypt';
import prisma from '../../lib/prisma.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshTokenUtil } from '../../lib/tokenUtils.js';
import { emailExpires } from '../../core/config/config.js';
import sendEmail from '../../lib/sendEmail.js';
import verificationCodeTemplate from '../../lib/emailTemplates.js';

export const registerUserService = async ({ name, email, password, role = 'CUSTOMER' }) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error('User already registered.');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword, role },
    select: { id: true, name: true, email: true, role: true, createdAt: true }
  });

  return user;
};

export const loginUserService = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and password are required');

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');
  if (user.status === 'SUSPENDED') throw new Error('Account suspended');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');

  const payload = { _id: user.id, role: user.role };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });

  const { password: _, refreshToken: __, otp: ___, ...safeUser } = user;
  return { user: safeUser, accessToken, refreshToken };
};

export const refreshAccessTokenService = async (refreshToken) => {
  if (!refreshToken) throw new Error('No refresh token provided');

  const user = await prisma.user.findFirst({ where: { refreshToken } });
  if (!user) throw new Error('Invalid refresh token');

  const decoded = verifyRefreshTokenUtil(refreshToken);
  if (decoded._id !== user.id) throw new Error('Invalid refresh token');

  const payload = { _id: user.id, role: user.role };
  const newAccessToken = generateAccessToken(payload);
  const newRefreshToken = generateRefreshToken(payload);

  await prisma.user.update({ where: { id: user.id }, data: { refreshToken: newRefreshToken } });
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

export const forgetPasswordService = async (email) => {
  if (!email) throw new Error('Email is required');
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid email');

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + emailExpires);

  await prisma.user.update({
    where: { id: user.id },
    data: { otp, otpExpires, otpVerified: false, resetExpires: null }
  });

  await sendEmail({ to: email, subject: 'Password Reset OTP', html: verificationCodeTemplate(otp) });
};

export const verifyCodeService = async ({ email, otp }) => {
  if (!email || !otp) throw new Error('Email and otp are required');
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid email');
  if (!user.otp || !user.otpExpires) throw new Error('Otp not found');
  if (user.otp !== otp.toString() || Date.now() > user.otpExpires.getTime()) {
    throw new Error('Invalid or expired otp');
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { otp: null, otpExpires: null, otpVerified: true, resetExpires: new Date(Date.now() + 15 * 60 * 1000) }
  });
};

export const resetPasswordService = async ({ email, newPassword }) => {
  if (!email || !newPassword) throw new Error('Email and new password are required');
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid email');
  if (!user.otpVerified || !user.resetExpires) throw new Error('otp not cleared');
  if (Date.now() > user.resetExpires.getTime()) throw new Error('Reset session expired');

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword, otpVerified: false, resetExpires: null }
  });
};

export const changePasswordService = async ({ userId, oldPassword, newPassword }) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) throw new Error('Invalid old password');

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({ where: { id: userId }, data: { password: hashedPassword } });
};
