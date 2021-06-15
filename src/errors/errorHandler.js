//This file is used for all errors not caught by methodNotAllowed or a URL that is not found

function errorHandler(error, request, response, next) {
  // console.error(error);  // Commented out to silence tests.
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ error: message });
}

module.exports = errorHandler;
