import { query } from '../config/database.js';

export async function findUserByEmail(email) {
  const [rows] = await query('SELECT id, email, password_hash, ruolo FROM utente WHERE email = ? LIMIT 1', [email]);
  return rows[0] ?? null;
}

export async function createUser({ email, passwordHash, nome, cognome }) {
  const [result] = await query(
    'INSERT INTO utente (email, password_hash, nome, cognome, ruolo) VALUES (?, ?, ?, ?, ?)',
    [email, passwordHash, nome, cognome, 'cittadino']
  );
  return { id: result.insertId, email, role: 'cittadino' };
}
