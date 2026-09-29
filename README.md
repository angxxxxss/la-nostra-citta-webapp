# La Nostra Città, Il Nostro Futuro

Webapp del comitato **Insieme per Milano** per raccogliere segnalazioni, proposte e priorità urbane.

## Avvio locale

1. Copiare `.env.example` in `.env` e impostare almeno `SESSION_SECRET` con un valore casuale di almeno 32 caratteri.
2. Eseguire `npm install`.
3. Eseguire `npm run dev` e aprire `http://localhost:3000`.

L'app può avviarsi senza database soltanto per mostrare la UI e l'health check. Per usare le API che leggono/scrivono dati impostare `DB_REQUIRED=true`, tutte le variabili `DB_*`, e `DB_SSL_CA_PATH` verso un certificato CA locale **non tracciato da Git**. Non inserire password o certificati in `.env.example`, nel repository o nei log.

## API iniziali

- `GET /api/v1/health`
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me`

Le query assumono il modello MySQL documentato in `docs/analisi-tecnica.md`; prima di attivare registrazione/login è necessario verificare i nomi effettivi di colonne e vincoli nel database Aiven esistente. Questa base non esegue migrazioni né modifiche allo schema.
