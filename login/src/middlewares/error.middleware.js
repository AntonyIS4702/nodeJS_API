// src/middlewares/error.middleware.js
module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const isValidation = err.name === 'ZodError';
  const payload = isValidation
    ? { message: 'Invalid request', errors: err.errors }
    : { message: err.message || 'Internal Server Error' };
  res.status(isValidation ? 400 : status).json(payload);
};
