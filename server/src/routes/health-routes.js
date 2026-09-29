import { Router } from 'express';
import { databaseStatus } from '../config/database.js';

export const healthRouter = Router();
healthRouter.get('/', (_request, response) => {
  response.status(200).json({ status: 'ok', database: databaseStatus.connected ? 'connected' : 'not-configured' });
});
