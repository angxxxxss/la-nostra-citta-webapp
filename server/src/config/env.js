import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  SESSION_SECRET: z.string().min(32).default('development-only-change-this-session-secret'),
  CLIENT_ORIGIN: z.string().url().default('http://localhost:3000'),
  DB_HOST: z.string().optional(),
  DB_PORT: z.coerce.number().int().positive().optional(),
  DB_NAME: z.string().optional(),
  DB_USER: z.string().optional(),
  DB_PASSWORD: z.string().optional(),
  DB_SSL_CA_PATH: z.string().optional(),
  DB_REQUIRED: z.enum(['true', 'false']).default('false')
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
  throw new Error(`Configurazione non valida: ${parsed.error.issues.map((issue) => issue.path.join('.')).join(', ')}`);
}

export const env = { ...parsed.data, dbRequired: parsed.data.DB_REQUIRED === 'true' };
