import { Router } from 'express';
import { z } from 'zod';
import { authLimiter } from './rate-limiters.js';
import { validate } from '../middlewares/validate.js';
import { requireAuthentication } from '../middlewares/auth.js';
import { login, register } from '../services/auth-service.js';

const registration = z.object({
  email: z.string().email().max(254).transform((value) => value.toLowerCase()),
  password: z.string().min(12).max(128),
  nome: z.string().trim().min(1).max(80),
  cognome: z.string().trim().min(1).max(80)
});
const credentials = registration.pick({ email: true, password: true });

export const authRouter = Router();
authRouter.post('/register', authLimiter, validate(registration), async (request, response, next) => {
  try {
    const user = await register(request.validatedBody);
    request.session.user = user;
    response.status(201).json({ user });
  } catch (error) {
    if (error.code === 'EMAIL_ALREADY_EXISTS') return response.status(409).json({ error: { code: error.code, message: error.message } });
    return next(error);
  }
});
authRouter.post('/login', authLimiter, validate(credentials), async (request, response, next) => {
  try {
    const user = await login(request.validatedBody);
    request.session.user = user;
    response.json({ user });
  } catch (error) {
    if (error.code === 'INVALID_CREDENTIALS') return response.status(401).json({ error: { code: error.code, message: error.message } });
    return next(error);
  }
});
authRouter.post('/logout', requireAuthentication, (request, response, next) => request.session.destroy((error) => error ? next(error) : response.status(204).end()));
authRouter.get('/me', requireAuthentication, (request, response) => response.json({ user: request.session.user }));
