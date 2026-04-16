import { generateResponse } from '../../lib/responseFormate.js';
import {
  createProduceService, getAllProduceService, getProduceByIdService,
  updateProduceService, deleteProduceService
} from './produce.service.js';

export const createProduce = async (req, res, next) => {
  try {
    const data = await createProduceService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Produce listed successfully', data);
  } catch (error) {
    if (['Vendor profile not found', 'Vendor not approved yet'].includes(error.message)) {
      return generateResponse(res, 400, false, error.message, null);
    }
    next(error);
  }
};

export const getAllProduce = async (req, res, next) => {
  try {
    const data = await getAllProduceService(req.query);
    generateResponse(res, 200, true, 'Produce list fetched', data);
  } catch (error) { next(error); }
};

export const getProduceById = async (req, res, next) => {
  try {
    const data = await getProduceByIdService(req.params.id);
    generateResponse(res, 200, true, 'Produce fetched', data);
  } catch (error) {
    if (error.message === 'Produce not found') return generateResponse(res, 404, false, error.message, null);
    next(error);
  }
};

export const updateProduce = async (req, res, next) => {
  try {
    const data = await updateProduceService(req.user.id, req.params.id, req.body);
    generateResponse(res, 200, true, 'Produce updated', data);
  } catch (error) {
    if (error.message.includes('not found')) return generateResponse(res, 404, false, error.message, null);
    next(error);
  }
};

export const deleteProduce = async (req, res, next) => {
  try {
    await deleteProduceService(req.user.id, req.params.id);
    generateResponse(res, 200, true, 'Produce deleted', null);
  } catch (error) {
    next(error);
  }
};
