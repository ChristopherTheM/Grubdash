//Error handler for a URL that isn't defined or not found

function notFound(request, response, next) {
  next({ status: 404, message: `Path not found: ${request.originalUrl}` });
}

module.exports = notFound;
