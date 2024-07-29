const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class InternalServerError extends BaseError {
  constructor(description) {
    super(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      description
    );
  }
}

module.exports = InternalServerError;
