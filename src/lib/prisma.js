import { PrismaClient } from '@prisma/client';

// Prisma singleton - only ONE instance across the whole app
const prisma = new PrismaClient({
  log: ['warn', 'error'],
});

export default prisma;
