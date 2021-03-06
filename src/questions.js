// Initial question
const initialQuestions = [
    {
        type: "input",
        name: "employee_name",
        message: "What is the first manager's name?"
    },
    {
        type: "input",
        name: "employee_id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "employee_email",
        message: "What is the manager's email address?"
    }
]

// General employee questions
const questions = [
    {
        type: "list",
        name: "employee_role",
        message: "What is the employee's role?",
        choices: [
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "employee_name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "employee_id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "employee_email",
        message: "What is the employee's email address?"
    }
];

// Question to add additional employrr
const addAnotherEmployee = [
    {
        type: "confirm",
        name: "addNew",
        message: "Would you like to add another employee?",
        default: true
    }
]

module.exports = {
    initialQuestions,
    questions,
    addAnotherEmployee
}