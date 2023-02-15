// Employee parent class (name, id, email)
// must have methods: getName(), getId(), getEmail(), and getRole()
// getRole() should return Employee

class Employee{
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    };
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;