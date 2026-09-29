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

## 1. Requisiti utente (RU)

Descrivono le esigenze dei cittadini e dei membri del comitato, indicando cosa devono poter fare attraverso la piattaforma.

RU1 – Registrazione e identificazione: il cittadino deve poter creare un profilo personale, inserendo i propri dati e verificando la propria identità tramite carta d'identità, SPID o CIE.

RU2 – Accesso alla piattaforma: il cittadino deve poter accedere al proprio account in modo sicuro, così che le proprie attività siano riconducibili alla sua identità.

RU3 – Segnalazione delle problematiche: il cittadino deve poter segnalare problemi presenti nella città, come buche stradali, illuminazione carente, aree verdi abbandonate, problemi di viabilità, criticità idrogeologiche e movida selvaggia, indicando il luogo e allegando fotografie o video.

RU4 – Consultazione delle segnalazioni: il cittadino deve poter visualizzare le segnalazioni pubblicate dagli altri utenti, comprese descrizioni, fotografie, video, autori e posizioni.

RU5 – Partecipazione e interazione: il cittadino deve poter commentare le segnalazioni degli altri utenti ed esprimere il proprio sostegno o interesse verso le problematiche pubblicate.

RU6 – Gestione dei propri contenuti: il cittadino deve poter modificare o cancellare le proprie segnalazioni e i propri commenti.

RU7 – Individuazione delle priorità: il cittadino deve poter consultare una classifica delle problematiche più sentite dalla comunità, per conoscere le necessità di intervento maggiormente condivise.

RU8 – Monitoraggio delle problematiche: il cittadino deve poter seguire l'evoluzione delle segnalazioni, dalla pubblicazione all'eventuale presa in carico o all'invio delle proposte ai candidati Sindaco.

RU9 – Supervisione del comitato: i membri del comitato devono poter controllare l'attività della piattaforma, le segnalazioni e le interazioni degli utenti.

RU10 – Moderazione: i membri del comitato con ruolo di moderatore devono poter bannare gli utenti che non rispettano le regole della piattaforma.

## 2. Requisiti funzionali (RF)

Descrivono le operazioni specifiche che il sistema deve eseguire per soddisfare le esigenze degli utenti.

RF1 – Registrazione: il sistema deve consentire la creazione di un account personale, richiedendo nome, cognome, codice fiscale, e-mail, indirizzo di residenza e password.

RF2 – Verifica dell'identità: il sistema deve permettere la verifica dell'identità tramite caricamento della carta d'identità fronte-retro oppure autenticazione tramite SPID o CIE.

RF3 – Login: il sistema deve autenticare gli utenti registrati e verificati tramite le credenziali inserite e associare ogni attività al relativo profilo.

RF4 – Gestione dei ruoli: il sistema deve distinguere i cittadini dai membri del comitato, assegnando a questi ultimi i privilegi di supervisione e moderazione.

RF5 – Inserimento delle segnalazioni: il sistema deve permettere agli utenti registrati di pubblicare segnalazioni contenenti titolo, descrizione dettagliata, posizione o luogo del problema e almeno una fotografia o un breve video obbligatorio.

RF6 – Gestione delle tipologie: il sistema deve consentire l'inserimento di segnalazioni relative a buche stradali, illuminazione carente, aree verdi abbandonate, problemi di viabilità, criticità idrogeologiche e fenomeni di movida selvaggia.

RF7 – Visualizzazione delle segnalazioni: il sistema deve mostrare le segnalazioni pubblicate con descrizione, contenuti multimediali, autore e posizione.

RF8 – Interazione tra utenti: il sistema deve consentire agli utenti registrati di pubblicare commenti e manifestazioni di sostegno o interesse sulle segnalazioni.

RF9 – Gestione dei commenti: il sistema deve consentire agli utenti di modificare o cancellare i propri commenti, impedendo loro di modificare o cancellare quelli degli altri.

RF10 – Gestione delle segnalazioni: il sistema deve consentire agli utenti di modificare o cancellare esclusivamente le segnalazioni di cui sono autori.

RF11 – Classifica delle priorità: il sistema deve calcolare e visualizzare una classifica delle problematiche cittadine sulla base del sostegno e dell'interesse espressi dagli utenti.

RF12 – Gestione dello stato: il sistema deve registrare e rendere consultabile lo stato di avanzamento di ogni segnalazione, dalla pubblicazione all'eventuale presa in carico o all'invio ai candidati Sindaco.

RF13 – Area riservata al comitato: il sistema deve fornire un'area dedicata ai membri del comitato per controllare le attività della piattaforma, le segnalazioni e le interazioni.

RF14 – Ban degli utenti: il sistema deve consentire ai moderatori appartenenti al comitato di bannare gli utenti che non rispettano le regole della piattaforma.

RF15 – Moderazione automatica: il sistema deve poter integrare un modulo di intelligenza artificiale che analizzi i testi delle segnalazioni, individui contenuti volgari, offensivi o d'odio e li blocchi oppure li sottoponga alla revisione del comitato.

RF16 – Classificazione tematica automatica: il sistema deve poter integrare un modulo di intelligenza artificiale che analizzi le descrizioni e associ automaticamente una o più categorie alle segnalazioni, come Ambiente, Mobilità Urbana, Politiche Giovanili e Decoro Urbano.

RF17 – Localizzazione automatica: il sistema deve poter estrarre dai metadati EXIF delle fotografie le coordinate geografiche disponibili, per facilitare la localizzazione delle segnalazioni su una mappa interattiva.

RF18 – Verifica dei contenuti multimediali: il sistema deve poter integrare un modulo di visione artificiale che verifichi la coerenza tra le immagini caricate e le descrizioni delle problematiche segnalate.