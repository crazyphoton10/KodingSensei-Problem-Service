const { ProblemRepository } = require("../repositories");
const markdownSanitizer = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(ProblemRepository) {
    this.ProblemRepository = ProblemRepository;
  }
  async createProblem(problemData) {
    try {
      //Sanitize the markdown for description
      problemData.description = markdownSanitizer(problemData.description);
      const problem = await this.ProblemRepository.createProblem(problemData);

      return problem;
    } catch (error) {
      console.log(error); //error from repo layer
      throw error;
    }
  }
  async getAllProblems(problemData) {
    const problems = await this.ProblemRepository.getAllProblems();
    return problems;
  }
  async getProblem(problemId) {
    const problem = await this.ProblemRepository.getProblem(problemId);
    return problem;
  }
}

module.exports = ProblemService;
