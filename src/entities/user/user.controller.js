import { generateResponse } from '../../lib/responseFormate.js';
import { getMyProfileService, updateMyProfileService } from './user.service.js';

export const getMyProfile = async (req, res, next) => {
  try {
    const data = await getMyProfileService(req.user.id);
    generateResponse(res, 200, true, 'Profile fetched', data);
  } catch (error) {
    next(error);
  }
};

export const updateMyProfile = async (req, res, next) => {
  try {
    const data = await updateMyProfileService(req.user.id, req.body);
    generateResponse(res, 200, true, 'Profile updated', data);
  } catch (error) {
    next(error);
  }
};
