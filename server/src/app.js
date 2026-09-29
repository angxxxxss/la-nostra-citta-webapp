import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import { env } from './config/env.js';
import { errorHandler, notFound } from './middlewares/errors.js';
import { authRouter } from './routes/auth-routes.js';
import { healthRouter } from './routes/health-routes.js';
import { apiLimiter } from './routes/rate-limiters.js';

const here = path.dirname(fileURLToPath(import.meta.url));
export const app = express();
app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: '100kb' }));
app.use(session({
  name: 'lnc.sid',
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: env.NODE_ENV === 'production', maxAge: 1000 * 60 * 60 * 8 }
}));
app.use('/api/v1', apiLimiter);
app.use('/api/v1/health', healthRouter);
app.use('/api/v1/auth', authRouter);
app.use(express.static(path.resolve(here, '../../client')));
app.get('/{*splat}', (_request, response) => response.sendFile(path.resolve(here, '../../client/index.html')));
app.use(notFound);
app.use(errorHandler);
