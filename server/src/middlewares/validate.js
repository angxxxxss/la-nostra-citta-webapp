export function validate(schema) {
  return (request, response, next) => {
    const result = schema.safeParse(request.body);
    if (!result.success) {
      return response.status(400).json({ error: { code: 'VALIDATION_ERROR', details: result.error.flatten() } });
    }
    request.validatedBody = result.data;
    return next();
  };
}
