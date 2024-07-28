const problemController = require("../controllers");

function pingProblemController(req, res) {
  return res.json({ msg: "Problem Controller is up" });
}
function addProblem(req, res) {
  return res.status(501).json({ msg: "Not Implemented" });
}
function getProblem(req, res) {
  return res.status(501).json({ msg: "Not Implemented" });
}
function getProblems(req, res) {
  return res.status(501).json({ msg: "Not Implemented" });
}
function deleteProblem(req, res) {
  return res.status(501).json({ msg: "Not Implemented" });
}
function updateProblem(req, res) {
  return res.status(501).json({ msg: "Not Implemented" });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
