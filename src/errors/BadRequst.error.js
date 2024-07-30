const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

//We expect our user to create problem on our platform. Problem will have name, description etc. If sb sends a request with an
//empty description we'll throw BadRequest error bcoz it's a client side issue as client is not sending valid request

class BadRequestError extends BaseError {
  constructor(propertyName, description) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Invalid Structure for ${propertyName} provided`,
      description
    );
  }
}

module.exports = BadRequestError;
