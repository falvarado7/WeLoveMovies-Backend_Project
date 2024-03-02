// asyncErrorBoundary() will wrap around route handlers/middleware functions and handle the async errors should they come up.

// Delegate parameter is an async/await handler/middleware function that will be called by asyncErrorBoundary
function asyncErrorBoundary(delegate, defaultStatus) {
  // Returns an Express handler or middleware function that will be called by Express in place of the delegate function
  return (request, response, next) => {
    Promise.resolve()
      .then(() => delegate(request, response, next))
      .catch((error = {}) => {
        const { status = defaultStatus, message = error } = error;
        next({
          status,
          message,
        });
      });
  };
}

module.exports = asyncErrorBoundary;