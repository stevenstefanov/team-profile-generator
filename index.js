// Importing classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Other requirements
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./src/questions");
const engQuestion = require("./src/engineer-question");
const intQuestion = require("./src/intern-question");
const mgrQuestion = require("./src/manager-question");
const template = require("./src/template");


var employeeObjects = [];
var employeeData = [];
var employeeCards = [];

// Function to create a new object for each of the roles
function createProfile(role, name, id, email, unique){
    switch (role){
        case "Manager":
            return new Manager(name, id, email, unique);
        case "Engineer":
            return new Engineer(name, id, email, unique);
        case "Intern":
            return new Intern(name, id, email, unique);
    }
}

// Function for the first manager upon initialization
async function initialManager(){
    console.log("Please fill in the following information for the first manager...")
    const newManager = await inquirer.prompt(questions.initialQuestions);
    newManager.employee_role = "Manager";
    await inquirer.prompt(mgrQuestion)
        .then((response) => {
            newManager.employee_unique = response.employee_office;
        });
    employeeData.push(newManager);
}

// Function for all other employeer
async function askEmployees(){
    console.log("Please fill in the following information to add more employees...");
    const newEmployee = await inquirer.prompt(questions.questions);

    // Switch statement that adds an additional property to the object, based on the role
    switch (newEmployee.employee_role){
        case "Manager":
            await inquirer.prompt(mgrQuestion)
            .then((response) => {
                newEmployee.employee_unique = response.employee_office;
            })
            .catch((error) => {
                if (error) throw error;
            })
            break;
        case "Engineer":
            await inquirer.prompt(engQuestion)
            .then((response) => {
                newEmployee.employee_unique = response.employee_github;
            })
            .catch((error) => {
                if (error) throw error;
            })
            break;
        case "Intern":
            await inquirer.prompt(intQuestion)
            .then((response) => {
                newEmployee.employee_unique = response.employee_school;
            })
            .catch((error) => {
                if (error) throw error;
            })
            break;
    }

    // Push the newly added employee to the employeeData array
    employeeData.push(newEmployee);

    // Ask the user if they would like to add another employee
    await inquirer.prompt(questions.addAnotherEmployee)
        .then((response) => {
            if (response.addNew === true){
                askEmployees();
            } else {
                console.log("Your employee profiles are being generated...");
                
                // For of loop that creates a new employee class object based on the data in employeeData
                for (const employee of employeeData){
                    const newProfile = createProfile(employee.employee_role, employee.employee_name, employee.employee_id, employee.employee_email, employee.employee_unique);
                    employeeObjects.push(newProfile);
                }

                for (const employee of employeeObjects){
                    switch (employee.role){
                        case "Manager":
                            employeeCards.push(template.employeeCard(employee.name, employee.role, `ID: ${employee.id}`, `${employee.email}`, `Office: ${employee.officeNumber}`));
                            break;
                        case "Engineer":
                            employeeCards.push(template.employeeCard(employee.name, employee.role, `ID: ${employee.id}`, `${employee.email}`, `GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`));
                            break;
                        case "Intern":
                            employeeCards.push(template.employeeCard(employee.name, employee.role, `ID: ${employee.id}`, `${employee.email}`, `School: ${employee.school}`));
                            break;
                    }
                }
                console.log("The HTML document is being rendered...")

                // Joins together the employeeCards array, and makes a HTML file
                const employeeCardsHTML = employeeCards.join("");
                const HTMLData = template.createHTML(employeeCardsHTML);
                fs.writeFileSync("./dist/index.html", HTMLData);
                console.log("File was written to your 'dist' folder and named 'index.html'!");
            }
        })
        .catch((error) => {
            if (error) throw error;
        })
}

async function init(){
    await initialManager();
    askEmployees();
}

init();
