const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/BaseError");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.description,
      data: {}, //since it's an exception so no data will be provided
    });
  }
  //If it's an unknown error it'll be Internal Server Error for us
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
    error: err,
    data: {},
  });
}

module.exports = errorHandler;
