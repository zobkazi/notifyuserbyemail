
// Define various HTTP errors
const ERRORS = {
    BAD_REQUEST: {
      code: 400,
      message: 'Bad Request'
    },
    UNAUTHORIZED: {
      code: 401,
      message: 'Unauthorized'
    },
    FORBIDDEN: {
      code: 403,
      message: 'Forbidden'
    },
    NOT_FOUND: {
      code: 404,
      message: 'Not Found'
    },
    METHOD_NOT_ALLOWED: {
      code: 405,
      message: 'Method Not Allowed'
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      message: 'Internal Server Error'
    },
    NOT_IMPLEMENTED: {
      code: 501,
      message: 'Not Implemented'
    },
    BAD_GATEWAY: {
      code: 502,
      message: 'Bad Gateway'
    },
    SERVICE_UNAVAILABLE: {
      code: 503,
      message: 'Service Unavailable'
    },
    GATEWAY_TIMEOUT: {
      code: 504,
      message: 'Gateway Timeout'
    }
  };
  
  // Export all HTTP errors
  module.exports = ERRORS;
  