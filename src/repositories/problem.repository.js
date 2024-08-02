const logger = require("../config/logger.config");
const NotFoundError = require("../errors/NotFoundError");
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
  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(
          `Problem.Repository: Problem with ${id} not found in the db`
        );
        throw new NotFoundError("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateProblem(id, update) {
    try {
      const problem = await Problem.findByIdAndUpdate(id, update, {
        new: true,
      });
      if (!problem) {
        throw new NotFoundError("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
