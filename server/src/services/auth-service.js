import argon2 from 'argon2';
import { createUser, findUserByEmail } from '../repositories/user-repository.js';

export async function register(data) {
  const existing = await findUserByEmail(data.email);
  if (existing) {
    const error = new Error('Email già registrata.');
    error.code = 'EMAIL_ALREADY_EXISTS';
    throw error;
  }
  const passwordHash = await argon2.hash(data.password, { type: argon2.argon2id });
  return createUser({ ...data, passwordHash });
}

export async function login({ email, password }) {
  const user = await findUserByEmail(email);
  if (!user || !(await argon2.verify(user.password_hash, password))) {
    const error = new Error('Credenziali non valide.');
    error.code = 'INVALID_CREDENTIALS';
    throw error;
  }
  return { id: user.id, email: user.email, role: user.ruolo };
}
