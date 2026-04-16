import { generateResponse } from '../../lib/responseFormate.js';
import { createPlantTrackingService, getMyPlantsService, updatePlantTrackingService } from './plant.service.js';
import { io } from '../../app.js';

export const createPlantTracking = async (req, res, next) => {
  try {
    const data = await createPlantTrackingService(req.user.id, req.body);
    // Emit real-time update to user's room
    io.to(`plant_${req.user.id}`).emit('plant_created', data);
    generateResponse(res, 201, true, 'Plant tracking started', data);
  } catch (error) {
    if (error.message === 'Rental space not found') return generateResponse(res, 404, false, error.message, null);
    next(error);
  }
};

export const getMyPlants = async (req, res, next) => {
  try {
    const data = await getMyPlantsService(req.user.id, req.query);
    generateResponse(res, 200, true, 'Plants fetched', data);
  } catch (error) { next(error); }
};

export const updatePlantTracking = async (req, res, next) => {
  try {
    const data = await updatePlantTrackingService(req.user.id, req.params.id, req.body);
    // Emit real-time update
    io.to(`plant_${req.user.id}`).emit('plant_updated', data);
    generateResponse(res, 200, true, 'Plant updated', data);
  } catch (error) {
    if (error.message === 'Plant tracking not found') return generateResponse(res, 404, false, error.message, null);
    next(error);
  }
};
