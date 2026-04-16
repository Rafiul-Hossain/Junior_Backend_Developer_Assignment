import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const createPostService = async (userId, data) => {
  return prisma.communityPost.create({
    data: {
      userId,
      title: data.title,
      postContent: data.postContent,
      tags: data.tags || []
    },
    include: { user: { select: { name: true } } }
  });
};

export const getAllPostsService = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = {};
  if (query.search) where.title = { contains: query.search, mode: 'insensitive' };
  if (query.tag) where.tags = { has: query.tag };

  const [posts, total] = await Promise.all([
    prisma.communityPost.findMany({
      where, skip, take: limit,
      include: { user: { select: { name: true } } },
      orderBy: { postDate: 'desc' }
    }),
    prisma.communityPost.count({ where })
  ]);

  return { posts, pagination: createPaginationInfo(page, limit, total) };
};

export const getPostByIdService = async (id) => {
  const post = await prisma.communityPost.findUnique({
    where: { id },
    include: { user: { select: { name: true } } }
  });
  if (!post) throw new Error('Post not found');
  return post;
};

export const deletePostService = async (userId, postId, userRole) => {
  const post = await prisma.communityPost.findUnique({ where: { id: postId } });
  if (!post) throw new Error('Post not found');
  if (post.userId !== userId && userRole !== 'ADMIN') throw new Error('Unauthorized');

  await prisma.communityPost.delete({ where: { id: postId } });
};
