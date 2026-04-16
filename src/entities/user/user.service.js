import prisma from '../../lib/prisma.js';

export const getMyProfileService = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true, name: true, email: true, role: true, status: true, createdAt: true,
      vendorProfile: { select: { farmName: true, certificationStatus: true, farmLocation: true, isApproved: true } }
    }
  });
  if (!user) throw new Error('User not found');
  return user;
};

export const updateMyProfileService = async (userId, data) => {
  const allowedFields = { name: data.name };
  // Remove undefined fields
  Object.keys(allowedFields).forEach(k => allowedFields[k] === undefined && delete allowedFields[k]);

  const user = await prisma.user.update({
    where: { id: userId },
    data: allowedFields,
    select: { id: true, name: true, email: true, role: true, updatedAt: true }
  });
  return user;
};
