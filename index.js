import { port } from './src/core/config/config.js';
import logger from './src/core/config/logger.js';
import { app } from './src/app.js';
import prisma from './src/lib/prisma.js';

prisma.$connect()
  .then(() => {
    logger.info('PostgreSQL connected via Prisma');
    app.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    logger.error('Database connection error:', err);
    process.exit(1);
  });
