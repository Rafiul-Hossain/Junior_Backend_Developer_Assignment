import { generateResponse } from '../../lib/responseFormate.js';
import {
  createRentalSpaceService, getAllRentalSpacesService,
  getRentalSpaceByIdService, updateRentalSpaceService
} from './rental.service.js';

export const createRentalSpace = async (req, res, next) => {
  try {
    const data = await createRentalSpaceService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Rental space created', data);
  } catch (error) {
    if (error.message === 'Vendor profile not found') return generateResponse(res, 400, false, error.message, null);
    next(error);
  }
};

export const getAllRentalSpaces = async (req, res, next) => {
  try {
    const data = await getAllRentalSpacesService(req.query);
    generateResponse(res, 200, true, 'Rental spaces fetched', data);
  } catch (error) { next(error); }
};

export const getRentalSpaceById = async (req, res, next) => {
  try {
    const data = await getRentalSpaceByIdService(req.params.id);
    generateResponse(res, 200, true, 'Rental space fetched', data);
  } catch (error) {
    if (error.message === 'Rental space not found') return generateResponse(res, 404, false, error.message, null);
    next(error);
  }
};

export const updateRentalSpace = async (req, res, next) => {
  try {
    const data = await updateRentalSpaceService(req.user.id, req.params.id, req.body);
    generateResponse(res, 200, true, 'Rental space updated', data);
  } catch (error) { next(error); }
};
