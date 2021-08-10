// Import Employee class
const Employee = require("./Employee");

// Define Manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.role = "Manager";
      this.officeNumber = officeNumber;
  }
}

module.exports = Manager;