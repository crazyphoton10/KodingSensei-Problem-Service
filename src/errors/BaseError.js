class BaseError extends Error {
  constructor(name, statusCode, message, description) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
    this.description = description;
    // Error.captureStackTrace(this);
  }
}

module.exports = BaseError;
