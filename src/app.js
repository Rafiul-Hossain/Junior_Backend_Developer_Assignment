import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xssClean from 'xss-clean';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';

import logger from './core/config/logger.js';
import errorHandler from './core/middlewares/errorMiddleware.js';
import notFound from './core/middlewares/notFound.js';
import { globalLimiter } from './lib/limit.js';
import appRouter from './core/app/appRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);

// Socket.io for real-time plant tracking
export const io = new Server(httpServer, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

io.on('connection', (socket) => {
  logger.info(`Socket connected: ${socket.id}`);

  socket.on('join_plant_room', (userId) => {
    socket.join(`plant_${userId}`);
    logger.info(`User ${userId} joined plant tracking room`);
  });

  socket.on('disconnect', () => {
    logger.info(`Socket disconnected: ${socket.id}`);
  });
});

// Security middleware
app.use(helmet());
app.use(cors({ origin: true, credentials: true, methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'] }));
app.use(xssClean());

// Logging
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10000kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiting
app.use(globalLimiter);

// Static files
const uploadPath = path.resolve(__dirname, '../uploads');
app.use('/uploads', express.static(uploadPath));

// API routes
app.use('/api', appRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: true, message: 'Server is running', timestamp: new Date() });
});

// 404 & error handlers
app.use(notFound);
app.use(errorHandler);

logger.info('Middleware stack initialized');

export { app, httpServer };
