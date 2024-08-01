const Problem = require("../models/problem.model");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error; //to handle in controllers
    }
  }
}

module.exports = ProblemRepository;
