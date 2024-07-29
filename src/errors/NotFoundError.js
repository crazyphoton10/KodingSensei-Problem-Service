const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotFoundError extends BaseError {
  constructor() {
    super(
      "NotFoundError",
      StatusCodes.NOT_FOUND,
      "Resouce Not Found",
      description
    );
  }
}

module.exports = NotFoundError;
