import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('la pagina iniziale espone titolo, navigazione e modulo di segnalazione', async () => {
  const page = await readFile(new URL('../../client/index.html', import.meta.url), 'utf8');
  assert.match(page, /La Nostra Città, Il Nostro Futuro/);
  assert.match(page, /<form id="report-form">/);
  assert.match(page, /type="file"/);
});

test('il modello di configurazione non contiene credenziali Aiven reali', async () => {
  const envExample = await readFile(new URL('../../.env.example', import.meta.url), 'utf8');
  assert.match(envExample, /^DB_PASSWORD=$/m);
  assert.doesNotMatch(envExample, /AVNS_/);
  assert.doesNotMatch(envExample, /BEGIN CERTIFICATE/);
});
