const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe("Employee", () => {
    
    describe("Initialization", () => {
        it("Returns and object that's an instance of the Employee class when called with this");

        const employee = new Employee();
        
        expect(employee instanceof Employee).toBeTruthy()
    

        it("It sets the name property based on the constructor argument", () => {
            const name = "Steven";
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });

        it("It sets the name property based on the constructor argument", () => {
            const id = 1;
            const employee = new Employee('', id);

            expect(employee.id).toBe(id);
        });

        it("It sets the name property based on the constructor argument", () => {
            const email = "test@gmail.com";
            const employee = new Employee('', 0, email);

            expect(employee.email).toBe(email);
        });
    })

    describe("getName", () => {

        it("it returns the name property when the name method is called", () => {
            const name = "Steven";
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });
    })

    describe("getInfo", () => {

        it("it returns the id property when the id method is called", () => {
            const id = 1;
            const employee = new Employee("", id);

            expect(employee.id).toBe(id);
        });
    })

    describe("getEmail", () => {

        it("it returns the email property when the email method is called", () => {
            const email = "test@gmail.com";
            const employee = new Employee("", 0, email);

            expect(employee.email).toBe(email);
        });
    })

    describe("getRole", () => {

        it("it returns the role property when the role method is called", () => {
            const employee = new Employee();

            expect(employee.getRole()).toBe('Employee');
        });
    });

});