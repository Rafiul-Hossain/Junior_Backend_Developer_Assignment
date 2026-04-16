import jwt from 'jsonwebtoken';
import { accessTokenSecrete, accessTokenExpires, refreshTokenSecrete, refreshTokenExpires } from '../core/config/config.js';

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, accessTokenSecrete, { expiresIn: accessTokenExpires });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, refreshTokenSecrete, { expiresIn: refreshTokenExpires });
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, accessTokenSecrete);
};

export const verifyRefreshTokenUtil = (token) => {
  return jwt.verify(token, refreshTokenSecrete);
};
