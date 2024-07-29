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
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: "Not Implemented" });
}
function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: "Not Implemented" });
}
function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: "Not Implemented" });
}
function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: "Not Implemented" });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
