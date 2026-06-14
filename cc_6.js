// Step 1: Create a base class called Employee with the following properties: name, department
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    // Add a method called describe() that returns a string describing the employee’s name and department.
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Step 2: Create a subclass called Manager that extends the Employee class and adds an additional property called teamSize.
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    // Create a describe() method that overrides the parent method and adds manager-specific information about the team size.
    describe() {
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
    }
}

// Step 3: Create a few sample employees and managers using new employee() and new manager()
const employee1 = new Employee("Ricky", "Marketing");
const employee2 = new Employee("Daisy", "Sales");
const manager1 = new Manager("Matthew", "Engineering", 10);
const manager2 = new Manager("Karina", "Human Resources", 5);

// Step 4: Create a class called Company with a property employees (an array). Add methods: addEmployee(employee) – adds an employee to the array, listEmployees() – logs each employee’s description
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}

// Step 5: Instantiate a company object, add the employees and managers to the company, and call the listEmployees().
const company = new Company();
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);
company.addEmployee(manager2);
company.listEmployees();