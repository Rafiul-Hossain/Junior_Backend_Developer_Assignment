import { generateResponse } from '../../lib/responseFormate.js';
import {
  createVendorProfileService, getMyVendorProfileService,
  updateVendorProfileService, getAllVendorsService
} from './vendor.service.js';

export const createVendorProfile = async (req, res, next) => {
  try {
    const data = await createVendorProfileService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Vendor profile created', data);
  } catch (error) {
    if (error.message === 'Vendor profile already exists') return generateResponse(res, 400, false, error.message, null);
    next(error);
  }
};

export const getMyVendorProfile = async (req, res, next) => {
  try {
    const data = await getMyVendorProfileService(req.user.id);
    generateResponse(res, 200, true, 'Vendor profile fetched', data);
  } catch (error) {
    next(error);
  }
};

export const updateVendorProfile = async (req, res, next) => {
  try {
    const data = await updateVendorProfileService(req.user.id, req.body);
    generateResponse(res, 200, true, 'Vendor profile updated', data);
  } catch (error) {
    next(error);
  }
};

export const getAllVendors = async (req, res, next) => {
  try {
    const data = await getAllVendorsService(req.query);
    generateResponse(res, 200, true, 'Vendors fetched', data);
  } catch (error) {
    next(error);
  }
};
