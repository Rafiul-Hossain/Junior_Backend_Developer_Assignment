import { generateResponse } from '../../lib/responseFormate.js';
import { createPostService, getAllPostsService, getPostByIdService, deletePostService } from './community.service.js';

export const createPost = async (req, res, next) => {
  try {
    const data = await createPostService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Post created', data);
  } catch (error) { next(error); }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const data = await getAllPostsService(req.query);
    generateResponse(res, 200, true, 'Posts fetched', data);
  } catch (error) { next(error); }
};

export const getPostById = async (req, res, next) => {
  try {
    const data = await getPostByIdService(req.params.id);
    generateResponse(res, 200, true, 'Post fetched', data);
  } catch (error) {
    if (error.message === 'Post not found') return generateResponse(res, 404, false, error.message, null);
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    await deletePostService(req.user.id, req.params.id, req.user.role);
    generateResponse(res, 200, true, 'Post deleted', null);
  } catch (error) {
    if (error.message === 'Unauthorized') return generateResponse(res, 403, false, error.message, null);
    next(error);
  }
};
