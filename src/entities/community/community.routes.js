import express from 'express';
import { createPost, getAllPosts, getPostById, deletePost } from './community.controller.js';
import { verifyToken } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllPosts);                         // public: browse forum
router.get('/:id', getPostById);                     // public: read post
router.post('/', verifyToken, createPost);           // any logged-in user
router.delete('/:id', verifyToken, deletePost);      // author or admin

export default router;
