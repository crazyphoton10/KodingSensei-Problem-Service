const problemController = require("../controllers");
const { StatusCodes } = require("http-status-codes");
const NotimplementedError = require("../errors/Notimplemented.error");

function pingProblemController(req, res) {
  return res.json({ msg: "Problem Controller is up" });
}
function addProblem(req, res, next) {
  try {
    //Nothing Implemented
    throw new NotimplementedError("addProblem");
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}
function getProblem(req, res) {
  try {
    //Nothing Implemented
    throw new NotimplementedError("addProblem");
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}
function getProblems(req, res) {
  try {
    //Nothing Implemented
    throw new NotimplementedError("addProblem");
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}
function deleteProblem(req, res) {
  try {
    //Nothing Implemented
    throw new NotimplementedError("addProblem");
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}
function updateProblem(req, res) {
  try {
    //Nothing Implemented
    throw new NotimplementedError("addProblem");
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
