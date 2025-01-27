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
async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the problems",
      error: {},
      data: problem,
    });
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}
async function getProblems(req, res, next) {
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
async function deleteProblem(req, res, next) {
  try {
    const deleted = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted a problem",
      error: {},
      data: req.params.id,
    });
  } catch (error) {
    //When exception is caught we'll just call next MW i.e. ErrorHandler
    next(error);
  }
}
async function updateProblem(req, res, next) {
  try {
    const update = await problemService.updateProblem(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated a problem",
      error: {},
      data: update,
    });
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
