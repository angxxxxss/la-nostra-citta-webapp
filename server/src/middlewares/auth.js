export function requireAuthentication(request, response, next) {
  if (!request.session.user) {
    return response.status(401).json({ error: { code: 'UNAUTHENTICATED', message: 'Autenticazione richiesta.' } });
  }
  return next();
}

export function requireRole(...roles) {
  return (request, response, next) => {
    if (!request.session.user || !roles.includes(request.session.user.role)) {
      return response.status(403).json({ error: { code: 'FORBIDDEN', message: 'Permessi insufficienti.' } });
    }
    return next();
  };
}
