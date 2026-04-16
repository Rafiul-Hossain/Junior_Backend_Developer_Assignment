import { generateResponse } from '../../lib/responseFormate.js';
import {
  getAllUsersService, updateUserStatusService, approveVendorService,
  getDashboardStatsService, approveCertForProduceService
} from './admin.service.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const data = await getAllUsersService(req.query);
    generateResponse(res, 200, true, 'Users fetched', data);
  } catch (error) { next(error); }
};

export const updateUserStatus = async (req, res, next) => {
  try {
    const data = await updateUserStatusService(req.params.id, req.body.status);
    generateResponse(res, 200, true, 'User status updated', data);
  } catch (error) { next(error); }
};

export const approveVendor = async (req, res, next) => {
  try {
    const data = await approveVendorService(req.params.id);
    generateResponse(res, 200, true, 'Vendor approved', data);
  } catch (error) { next(error); }
};

export const getDashboardStats = async (req, res, next) => {
  try {
    const data = await getDashboardStatsService();
    generateResponse(res, 200, true, 'Dashboard stats', data);
  } catch (error) { next(error); }
};

export const approveProduceCert = async (req, res, next) => {
  try {
    const data = await approveCertForProduceService(req.params.id, req.body.status);
    generateResponse(res, 200, true, 'Produce certification updated', data);
  } catch (error) { next(error); }
};
