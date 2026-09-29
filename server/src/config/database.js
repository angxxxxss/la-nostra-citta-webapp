import fs from 'node:fs';
import mysql from 'mysql2/promise';
import { env } from './env.js';

const configured = Boolean(env.DB_HOST && env.DB_PORT && env.DB_NAME && env.DB_USER && env.DB_PASSWORD && env.DB_SSL_CA_PATH);

export const databaseStatus = { configured, connected: false };

export const pool = configured
  ? mysql.createPool({
      host: env.DB_HOST,
      port: env.DB_PORT,
      database: env.DB_NAME,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      ssl: { ca: fs.readFileSync(env.DB_SSL_CA_PATH, 'utf8'), rejectUnauthorized: true },
      waitForConnections: true,
      connectionLimit: 10,
      enableKeepAlive: true
    })
  : null;

export async function verifyDatabaseConnection() {
  if (!pool) return false;
  await pool.query('SELECT 1');
  databaseStatus.connected = true;
  return true;
}

export async function query(sql, values = []) {
  if (!pool) {
    const error = new Error('Database non configurato. Impostare le variabili DB_* e DB_SSL_CA_PATH.');
    error.code = 'DATABASE_UNAVAILABLE';
    throw error;
  }
  return pool.execute(sql, values);
}
