// Create Prisma-compatible pagination
export const getPaginationParams = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10));
  const skip = (page - 1) * limit;
  return { page, limit, skip };
};

export const createPaginationInfo = (page, limit, totalData) => ({
  currentPage: page,
  totalPages: Math.ceil(totalData / limit),
  totalData,
  hasNextPage: page * limit < totalData,
  hasPrevPage: page > 1,
});
