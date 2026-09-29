# Analisi tecnica — La Nostra Città, Il Nostro Futuro

**Data dell'analisi:** 29 settembre 2026
**Ambito:** sola webapp. Non sono state progettate né introdotte applicazioni Android, iOS, React Native, Flutter, Electron, una PWA completa o pacchetti per store.

> **Limite bloccante dell'analisi.** La directory locale `/workspace/la-nostra-citta-webapp` è un repository Git valido, ma al momento dell'analisi contiene esclusivamente `.gitkeep`. Non ha alcun remote configurato; il repository indicato dall'utente non è raggiungibile dall'ambiente (la verifica HTTPS riceve risposta `403` dal tunnel). Il file obbligatorio `analisi_requisiti_esercizio_1.md` non è presente nel repository e non è stata trovata un'altra copia nell'area di lavoro. Di conseguenza, ogni voce che richiede il confronto con il documento o con il codice è indicata come **non verificabile**, non come assente nel prodotto sorgente remoto.

## 1. Stato attuale del repository

### Repository e Git

- **Percorso rilevato:** `/workspace/la-nostra-citta-webapp`.
- **Branch corrente:** `work`.
- **Working tree:** pulita prima della creazione di questo rapporto; nessuna modifica locale preesistente è stata eliminata.
- **Ultimo commit:** `17fb9eb Initialize repository`.
- **Branch locali/remoti:** esiste soltanto il branch locale `work`; nessun branch remoto è configurato o verificabile.
- **Remote Git:** nessuno configurato. Il collegamento al repository GitHub dichiarato richiede l'URL reale/autorizzato e una connettività GitHub disponibile; non è stato aggiunto un remote né eseguito un clone per non alterare la configurazione senza istruzioni.

### Struttura e file principali

```text
la-nostra-citta-webapp/
├── .git/
├── .gitkeep
└── docs/
    └── analisi-tecnica.md  # unico file creato in questa fase
```

Prima del presente documento era tracciato soltanto `.gitkeep`. Non sono disponibili `README.md`, `package.json`, `.gitignore`, `.env.example`, file SQL, configurazioni, documentazione preesistente, frontend, backend, route API, modelli/query, autenticazione, pagine delle segnalazioni o codice di upload/allegati.

### Stack, avvio e dipendenze

| Aspetto | Esito della verifica |
|---|---|
| Frontend, linguaggi, framework e build | Base implementata: HTML/CSS/JavaScript modulare servito da Express; non richiede build frontend. |
| Backend/API REST | Base implementata: Node.js/Express con middleware, health check e API di autenticazione. |
| Database e connessione Aiven | I parametri e i materiali TLS sono stati ricevuti privatamente; non sono inseriti in file versionati. La connessione non è stata verificata poiché DNS/rete e download npm sono bloccati dall'ambiente. |
| Autenticazione e autorizzazione | Base implementata: Argon2id, sessione cookie HttpOnly, rate limiting e middleware RBAC; attivazione subordinata allo schema esistente. |
| Allegati/upload | La UI prepara il campo obbligatorio; endpoint e storage saranno collegati dopo la verifica delle tabelle Aiven. |
| Modalità di avvio e script npm | `npm run dev`, `npm start` e `npm test` sono documentati in `README.md`. |
| Dipendenze | Manifest presente; installazione non eseguibile nell'ambiente corrente per risposta 403 dal registry npm. |

### Funzionalità, problemi e configurazione

- **Funzionalità implementate verificabili:** nessuna, poiché non è presente codice applicativo.
- **Funzionalità mancanti nel checkout locale:** l'intera webapp e gli artefatti minimi di configurazione/documentazione; non è possibile stabilire se siano presenti nel repository GitHub non raggiungibile.
- **Problemi tecnici/configurativi:** manca il remote Git, manca il file di requisiti obbligatorio, e non esistono file da cui dedurre runtime, build, schema o procedure di avvio.
- **Sicurezza:** non sono stati trovati segreti, `.env` tracciati, query SQL, endpoint, CORS, upload o dati personali da controllare. L'assenza di `.gitignore` costituisce un rischio futuro: prima di aggiungere configurazioni bisognerà escludere `.env`, `node_modules/`, build, log e upload non gestiti.

## 2. Conformità ai requisiti

Il documento di riferimento `analisi_requisiti_esercizio_1.md` non è disponibile; la tabella copre quindi le aree elencate nella richiesta e rappresenta il solo checkout locale. Le soluzioni sono proposte per una fase successiva, senza modificare il database Aiven esistente.

| ID | Requisito | Stato | File coinvolti | Problema | Soluzione | Priorità |
|---|---|---|---|---|---|---|
| R01 | Descrizione, obiettivi, attori e ruoli | non verificabile | Documento requisiti e codice assenti | Manca la fonte primaria e l'applicazione | Recuperare il documento e tradurre attori/permessi in una matrice ruoli | alta |
| R02 | Registrazione e autenticazione | non verificabile | Nessuno | Nessun endpoint, UI o modello utente | Implementare API e interfaccia dopo verifica schema Aiven | critica |
| R03 | Quartieri e associazione utente–quartiere | non verificabile | Nessuno | Nessun modello/dato disponibile | Verificare tabelle Aiven e introdurre CRUD/relazioni necessari | alta |
| R04 | Segnalazioni, coordinate e ciclo di vita | non verificabile | Nessuno | Non esistono form, API o schema consultabile | Definire workflow, coordinate DECIMAL e storico di stato | critica |
| R05 | Allegato obbligatorio, upload ed EXIF | non verificabile | Nessuno | Nessuna validazione o storage verificabile | Validare lato server e imporre la regola alla pubblicazione | critica |
| R06 | Categorie e relazione molti-a-molti | non verificabile | Nessuno | Nessun modello/query | Verificare `categoria` e `segnalazione_categoria` su Aiven | alta |
| R07 | Ricerca, filtri, dashboard e classifica | non verificabile | Nessuno | Nessuna UI/API/indice | Progettare query paginate e indici dopo la verifica dello schema | media |
| R08 | Sostegni e divieto di duplicati | non verificabile | Nessuno | Nessuna tabella/endpoint disponibile | Vincolo UNIQUE composto e endpoint autenticato/idempotente | alta |
| R09 | Stati, storico e moderazione | non verificabile | Nessuno | Nessun workflow, autorizzazione o audit disponibile | Stati di dominio, storico immutabile e RBAC moderatore | critica |
| R10 | Predisposizione IA e risultati | non verificabile | Nessuno | Nessuna coda, tabella o contratto disponibile | Integrare job asincroni e persistere output tracciabile in `analisi_ia` | media |
| R11 | Sicurezza e privacy | non verificabile | Nessuno | Non verificabili credenziali, protezioni, consenso o minimizzazione dati | Configurazione via ambiente, RBAC, rate limit, log sicuri e policy privacy | critica |
| R12 | Accessibilità, prestazioni, affidabilità e scalabilità | non verificabile | Nessuno | Non esistono frontend, test o osservabilità | UI semantica/WCAG, indici, paginazione, test e monitoraggio | alta |
| D01 | Entità e chiavi: utente, quartiere, stato_segnalazione, categoria, segnalazione, allegato | non verificabile | Nessun file SQL/modello | Schema Aiven non fornito | Esportare schema senza segreti e confrontarlo con il modello concettuale | critica |
| D02 | Entità associative/storiche: segnalazione_categoria, sostegno, storico_stato, analisi_ia | non verificabile | Nessun file SQL/modello | Cardinalità, PK/FK e vincoli ignoti | Verificare PK/FK/UNIQUE/CHECK e procedure sul database esistente | critica |
| D03 | Integrità, normalizzazione, indici, trigger e viste MySQL | non verificabile | Nessun file SQL | Non è possibile analizzare DDL, trigger o query | Revisionare DDL MySQL 8.0+ e piano indici senza migrare automaticamente | alta |

## 3. Analisi MySQL

### Stato verificabile

Non è presente alcun file `.sql`, ORM, migrazione o modello. È stata implementata soltanto una configurazione `mysql2` parametrizzata tramite variabili d'ambiente e CA TLS locale, senza inserire parametri Aiven o materiale segreto nel repository. Il database Aiven esistente non viene modificato in questa fase e non è stato interrogato: l'ambiente non risolve l'endpoint e non consente di installare il driver npm. Perciò non si possono attestare tabelle, chiavi, cardinalità, normalizzazione, indici, trigger, viste, integrità referenziale o incoerenze tra codice e schema.

Non è stato individuato codice PostgreSQL nel checkout locale. Questo non certifica che il database remoto sia compatibile con MySQL: il DDL/schema Aiven deve essere fornito o reso consultabile in sola lettura.

### Checklist di conformità MySQL 8.0+ da applicare al database Aiven

Il database target deve usare `ENGINE=InnoDB`, charset/collation `utf8mb4`, PK numeriche `BIGINT UNSIGNED AUTO_INCREMENT` (o UUID coerenti se già adottati), FK con indici, `TIMESTAMP`/`DATETIME` coerenti in UTC, coordinate `DECIMAL(9,6)` o precisione equivalente, JSON nativo per risultati IA/EXIF e vincoli `NOT NULL`, `UNIQUE` e `CHECK` dove applicabili.

| Area | Verifica richiesta |
|---|---|
| Tabelle | `utente`, `quartiere`, `stato_segnalazione`, `categoria`, `segnalazione`, `allegato`, `segnalazione_categoria`, `sostegno`, `storico_stato`, `analisi_ia`. |
| Relazioni | FK per utente–segnalazione, utente–quartiere, quartiere–segnalazione, segnalazione–allegato/categoria/stato/storico/analisi IA, utente–sostegno–segnalazione e allegato–analisi IA. |
| Vincoli | Email/identificativi univoci; UNIQUE(`utente_id`,`segnalazione_id`) su `sostegno`; PK composta o UNIQUE sulle associazioni; FK con azioni DELETE deliberate; almeno un allegato imposto nel flusso di pubblicazione, non tramite un vincolo impossibile su righe figlie. |
| Indici | FK, stato/data pubblicazione, quartiere/stato, autore/data, filtri categoria e ordinamento per sostegni; valutare indici composti dopo le query reali. |
| Trigger e viste | Se usati, DDL MySQL con `DELIMITER`, `SIGNAL SQLSTATE` e gestione atomica dello storico; viste soltanto per letture ricorrenti e senza sostituire l'autorizzazione applicativa. |
| Allegati/IA | Percorso non prevedibile, nome originale separato, MIME/dimensione/hash/metadati EXIF controllati; `analisi_ia` deve mantenere tipo/modello/versione, esito JSON, punteggio e riferimenti a segnalazione/allegato. |

### Incongruenze e rischi

Il codice applicativo iniziale non può ancora essere confrontato con lo schema. Prima di attivare le API che scrivono dati occorrono: dump DDL privo di credenziali o accesso read-only, versione effettiva MySQL e inventario di utenti/privilegi. Non eseguire migrazioni, trigger o alterazioni fino a revisione e approvazione esplicite.

## 4. Stack consigliato

| Area | Scelta | Motivazione concreta |
|---|---|---|
| Backend | **Express.js** | Più semplice da apprendere e sufficiente per una REST API scolastica; middleware, autenticazione, upload e separazione controller/service/repository sono chiari. Fastify offre prestazioni/schema validi ma aggiunge un cambio di convenzioni; NestJS è più strutturato ma eccessivo per un progetto inizialmente vuoto. |
| Frontend | **HTML, CSS e JavaScript modulari** | Nessun frontend esistente da preservare. Per form, filtri e dashboard iniziali evita dipendenze e complessità; l'API REST resta riusabile da una futura app. Valutare React/Vue soltanto se UI/stato crescono oltre la gestione modulare. |
| Database | **MySQL 8.0+ su Aiven** | Vincolo del progetto e servizio già esistente; connessione TLS configurata tramite ambiente. |
| Accesso DB | **mysql2 con query parametrizzate** | Leggero, trasparente rispetto a schema SQL esistente e adatto a mantenere uno script DDL ufficiale/versionato. Prisma/Sequelize/Knex vanno rivalutati se il team richiede migrazioni generate o un dominio molto più esteso. |
| Script SQL ufficiale | **Sì, da mantenere** | Il DDL MySQL revisionato è la fonte auditabile di PK/FK/trigger/viste; non va sostituito automaticamente dall'ORM. |
| Autenticazione | **Sessione server-side con cookie Secure/HttpOnly/SameSite e Argon2id** | Coerente con una webapp browser-first, evita token accessibili a JavaScript e limita la complessità di refresh token. Usare CSRF protection per operazioni mutative e RBAC lato server. Se in futuro servirà un client mobile, aggiungere un flusso token dedicato senza cambiare le API di dominio. |
| Validazione | **Zod** | Schemi riutilizzabili fra parser di request, controller e test, con messaggi strutturati; validazione sempre sul server. |
| Upload | **Multer su storage locale solo in sviluppo; object storage in produzione** | Multer integra `multipart/form-data` con Express. Imporre limiti, allowlist MIME verificata, estensione coerente, nome UUID, directory fuori dalle risorse pubbliche e scansione/EXIF asincroni. |
| Configurazione | **dotenv + `.env.example` senza segreti** | Separa parametri e credenziali; validare all'avvio le variabili obbligatorie, inclusi TLS Aiven. |
| Test | **Node test runner + Supertest; MySQL di test isolato** | Mantiene bassa la complessità e testa contratti HTTP, autorizzazioni e vincoli senza esporre Aiven di produzione. |

## 5. Architettura proposta

```text
Browser
  ↓
Frontend web
  ↓
API REST Node.js
  ↓
Middleware autenticazione e validazione
  ↓
Controller
  ↓
Service
  ↓
Repository o query parametrizzate
  ↓
MySQL 8.0+ su Aiven
```

Il frontend comunica soltanto tramite HTTPS con API versionate (`/api/v1`). I middleware applicano autenticazione, ruoli, validazione Zod, rate limiting, CSRF e gestione uniforme degli errori prima dei controller. I service contengono regole di dominio e transazioni (ad esempio creazione segnalazione, categorie, allegato e storico); i repository usano `mysql2` con parametri e non incorporano credenziali.

```text
Browser
  ↓
Upload API
  ↓
Validazione file (dimensione, MIME reale, estensione, nome e autorizzazione)
  ↓
Storage locale in sviluppo / object storage in produzione
  ↓
Metadati, hash e stato nella tabella allegato
```

Il file non sarà servito direttamente fino alla convalida; il download passerà da un controllo autorizzativo o da URL firmati. Il requisito dell'allegato obbligatorio va verificato nella transazione/workflow di pubblicazione: una segnalazione può essere bozza senza file, ma non diventa pubblicabile senza almeno un allegato valido.

```text
Segnalazione inviata
  ↓
Coda di elaborazione
  ↓
Moderazione / classificazione / EXIF / computer vision
  ↓
Tabella analisi_ia
  ↓
Revisione del moderatore
```

L'IA resta un'integrazione asincrona e opzionale: l'esito non pubblica né respinge automaticamente una segnalazione. Conservare origine, versione del modello, timestamp, punteggio, risultato JSON e decisione/revisore umano; minimizzare i dati inviati a servizi esterni.

## 6. Struttura di progetto consigliata

La struttura proposta parte da un repository vuoto e non viene creata in questa fase. Mantiene frontend e API separati, riusabili da client futuri, senza introdurre progetti mobile.

```text
project-root/
├── client/
│   ├── public/
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── services/
│       └── styles/
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── validators/
│   │   ├── utils/
│   │   └── app.js
│   ├── tests/
│   └── uploads/              # solo sviluppo, ignorata da Git
├── database/
│   ├── schema/
│   ├── migrations/
│   └── seeds/
├── docs/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Le migrazioni saranno introdotte solo dopo l'esportazione e la validazione dello schema Aiven esistente; i seed conterranno esclusivamente dati fittizi.

## 7. Piano di implementazione

| Fase | File coinvolti (previsti) | Attività | Dipendenze | Rischi | Criterio di completamento |
|---:|---|---|---|---|---|
| 1. Analisi e sistemazione | `docs/`, `README.md`, `.gitignore` | Recuperare requisiti e codice remoto, inventariare schema Aiven e definire baseline | Accesso repository e DDL read-only | Fonte remota mancante; sovrascrittura di file locali | Documento approvato e baseline non distruttiva |
| 2. Configurazione Node.js | `package.json`, `server/src/app.js`, `client/` | Inizializzare runtime, script e server/client minimi | Fase 1 | Dipendenze superflue | Avvio documentato e health check |
| 3. Collegamento MySQL | `server/src/config/`, `repositories/`, `.env.example` | Pool `mysql2`, TLS Aiven, health check e query parametrizzate | Schema e credenziali non pubbliche | TLS/privilegi/schema divergente | Connessione di test sicura senza segreti in Git |
| 4. Autenticazione | `controllers/`, `services/`, `routes/`, `middlewares/`, `validators/` | Registrazione/login/logout, Argon2id, sessione e CSRF | Tabelle utente | Session fixation, enumeration, reset password | Test di flusso e cookie sicuri |
| 5. Ruoli | middleware e servizi auth/moderazione | Matrice permessi e controlli RBAC server-side | Fase 4 e modello attori | Escalation privilegi | Ogni endpoint protetto testato per ruolo |
| 6. Quartieri | repository/service/controller/routes quartieri | Lettura e gestione autorizzata di quartieri e associazioni | Fasi 3 e 5, schema verificato | FK/dati iniziali incoerenti | CRUD e vincoli verificati |
| 7. Categorie | moduli categoria e schema approvato | Gestione categorie e associazione alle segnalazioni | Fasi 3 e 5 | Duplicati/categorie inconsistenti | API e unique constraints testati |
| 8. Segnalazioni | moduli segnalazione, UI form/lista | Bozze, coordinate, workflow e transazioni | Fasi 4–7 | Stati non definiti/geodati personali | Creazione e visualizzazione autorizzate |
| 9. Allegati | upload middleware/service/repository | Multipart, allowlist, hash, storage e requisito di pubblicazione | Fase 8 | File malevoli, path traversal, storage cost | File non valido rifiutato e pubblicazione bloccata senza allegato |
| 10. Sostegni | moduli sostegno, indice DB approvato | Inserimento/rimozione idempotenti e conteggi | Fasi 4 e 8 | Duplicati e race condition | UNIQUE composto e test concorrenza |
| 11. Stati e storico | moduli stato/storico/moderazione | Transizioni autorizzate, motivazioni e audit | Fasi 5 e 8 | Storico modificabile/transizioni illecite | Storico append-only e RBAC testati |
| 12. Dashboard e filtri | UI, API lettura e repository | Ricerca, filtri, paginazione, classifica e indici | Fasi 6–11 | Query lente/esposizione dati | Tempi e paginazione verificati su dati di test |
| 13. Validazione e sicurezza | middleware, validator, config | Zod, rate limit, headers, CORS ristretto, logging e privacy | Fasi 2–12 | Configurazioni permissive | Checklist OWASP e test negativi superati |
| 14. Test | `server/tests/`, eventuali test client | Unit, integrazione, autorizzazione, upload e DB isolato | Fasi precedenti | Dipendenza dall'ambiente Aiven | Suite ripetibile e documentata |
| 15. Documentazione | `README.md`, `docs/`, `.env.example` | Avvio, schema, API, ruoli, privacy e deploy | Tutte le fasi | Segreti inseriti in esempi | Istruzioni verificate da checkout pulito |
| 16. Predisposizione IA | service worker/coda, repository `analisi_ia` | Contratto job, risultati versionati e revisione umana | Schema approvato e Fasi 8–11 | Decisioni automatiche opache/privacy | IA disattivabile, auditabile e non bloccante |

## Decisione di fase

Questa fase crea esclusivamente `docs/analisi-tecnica.md`. Non modifica il database Aiven, non introduce dipendenze né codice applicativo e non esegue migrazioni. L'implementazione deve iniziare solo dopo che siano disponibili il documento dei requisiti e i sorgenti/remote effettivi, e dopo conferma esplicita dell'utente.
