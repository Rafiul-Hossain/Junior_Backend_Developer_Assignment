import express from 'express';
import { createProduce, getAllProduce, getProduceById, updateProduce, deleteProduce } from './produce.controller.js';
import { verifyToken, vendorMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllProduce);                                       // public: browse marketplace
router.get('/:id', getProduceById);                                  // public: view single product
router.post('/', verifyToken, vendorMiddleware, createProduce);      // vendor: list new produce
router.put('/:id', verifyToken, vendorMiddleware, updateProduce);    // vendor: update produce
router.delete('/:id', verifyToken, vendorMiddleware, deleteProduce); // vendor: delete produce

export default router;
