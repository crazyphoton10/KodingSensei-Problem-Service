const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotimplementedError extends BaseError {
  constructor(methodName) {
    super(
      "Not Implemented Error",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented`,
      {}
    );
  }
}

module.exports = NotimplementedError;
