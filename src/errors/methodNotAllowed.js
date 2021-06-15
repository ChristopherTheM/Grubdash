// Error handler for when a user tries to use a method that is not allowed on the backend at a certain URL

function methodNotAllowed(request, response, next) {
  next({
    status: 405,
    message: `${request.method} not allowed for ${request.originalUrl}`,
  });
}

module.exports = methodNotAllowed;
