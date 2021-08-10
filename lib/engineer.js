// Import Employee class
const Employee = require("./Employee");

// Define Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
      super(name, id, email);
      this.role = "Engineer";
      this.github = github;
  }
  getGithub() {
      return this.github;
  }
}

module.exports = Engineer;