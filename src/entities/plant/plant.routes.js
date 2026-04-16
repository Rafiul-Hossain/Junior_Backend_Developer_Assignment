import express from 'express';
import { createPlantTracking, getMyPlants, updatePlantTracking } from './plant.controller.js';
import { verifyToken, customerMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, customerMiddleware, createPlantTracking);
router.get('/my', verifyToken, getMyPlants);
router.put('/:id', verifyToken, customerMiddleware, updatePlantTracking);

export default router;
