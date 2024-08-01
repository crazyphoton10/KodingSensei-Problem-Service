const NotimplementedError = require("../errors/Notimplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ msg: "Problem Controller is up" });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
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
async function getProblems(req, res) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: response,
    });
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
