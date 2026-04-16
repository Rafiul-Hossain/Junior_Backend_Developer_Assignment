import { verifyAccessToken } from '../../lib/tokenUtils.js';
import RoleType from '../../lib/types.js';
import { generateResponse } from '../../lib/responseFormate.js';
import prisma from '../../lib/prisma.js';

// Verify JWT token
export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return generateResponse(res, 401, false, 'No token provided', null);

  try {
    const decoded = verifyAccessToken(token);
    const user = await prisma.user.findUnique({
      where: { id: decoded._id },
      select: { id: true, name: true, email: true, role: true, status: true }
    });

    if (!user) return generateResponse(res, 401, false, 'User not found', null);
    if (user.status === 'SUSPENDED') return generateResponse(res, 403, false, 'Account suspended', null);

    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') return generateResponse(res, 401, false, 'Token expired', null);
    if (err.name === 'JsonWebTokenError') return generateResponse(res, 401, false, 'Invalid token', null);
    next(err);
  }
};

// Only ADMIN
export const adminMiddleware = (req, res, next) => {
  if (!req.user) return generateResponse(res, 401, false, 'Unauthorized', null);
  if (req.user.role !== RoleType.ADMIN) return generateResponse(res, 403, false, 'Admin access only', null);
  next();
};

// Only VENDOR
export const vendorMiddleware = (req, res, next) => {
  if (!req.user) return generateResponse(res, 401, false, 'Unauthorized', null);
  if (req.user.role !== RoleType.VENDOR) return generateResponse(res, 403, false, 'Vendor access only', null);
  next();
};

// Only CUSTOMER
export const customerMiddleware = (req, res, next) => {
  if (!req.user) return generateResponse(res, 401, false, 'Unauthorized', null);
  if (req.user.role !== RoleType.CUSTOMER) return generateResponse(res, 403, false, 'Customer access only', null);
  next();
};

// ADMIN or VENDOR
export const adminOrVendorMiddleware = (req, res, next) => {
  if (!req.user) return generateResponse(res, 401, false, 'Unauthorized', null);
  if (![RoleType.ADMIN, RoleType.VENDOR].includes(req.user.role)) {
    return generateResponse(res, 403, false, 'Admin or Vendor access only', null);
  }
  next();
};
