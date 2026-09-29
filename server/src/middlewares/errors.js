export function notFound(_request, response) {
  response.status(404).json({ error: { code: 'NOT_FOUND', message: 'Risorsa non trovata.' } });
}

export function errorHandler(error, _request, response, _next) {
  if (error.code === 'DATABASE_UNAVAILABLE') {
    return response.status(503).json({ error: { code: error.code, message: 'Database temporaneamente non disponibile.' } });
  }
  if (error.name === 'MulterError') {
    return response.status(400).json({ error: { code: 'INVALID_UPLOAD', message: error.message } });
  }
  console.error(error);
  return response.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Errore interno del server.' } });
}
