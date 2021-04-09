// Import role specific questions
const manager = require('./manager-questions');
const engineer = require('./engineer-questions');
const intern = require('./intern-questions');

// Define all other questions
const questions = [
    {
        type: "list",
        name: "employee_role",
        message: "Please select a role for this employee.",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "employee_name",
        message: "Please input the employee's name."
    },
    {
        type: "input",
        name: "employee_id",
        message: "Please input the employee's ID."
    },
    {
        type: "input",
        name: "employee_email",
        message: "Please input the employee's email."
    }
];