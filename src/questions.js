// Initial question
const initialQuestions = [
    {
        type: "input",
        name: "manager_name",
        message: "What is the first manager's name?"
    },
    {
        type: "input",
        name: "manager_id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "manager_email",
        message: "What is the manager's email address?"
    }
]

// Define all other questions
const questions = [
    {
        type: "list",
        name: "employee_role",
        message: "What is the employee's role?",
        choices: [
            "Manager",
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

module.exports = {
    initialQuestions,
    questions
}