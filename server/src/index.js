import { app } from './app.js';
import { env } from './config/env.js';
import { databaseStatus, verifyDatabaseConnection } from './config/database.js';

if (env.dbRequired && !databaseStatus.configured) {
  throw new Error('DB_REQUIRED=true richiede DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD e DB_SSL_CA_PATH.');
}
if (databaseStatus.configured) {
  verifyDatabaseConnection().catch((error) => console.error(`Database non raggiungibile: ${error.message}`));
}
app.listen(env.PORT, () => console.log(`La Nostra Città disponibile su http://localhost:${env.PORT}`));
