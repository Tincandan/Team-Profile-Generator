// in addition to Employee (name, id, email), will also have (officeNumber)
// getRole() should overide employee response in favor of Manager
// when Employee is Manager class

const Employee = require('./Employee')

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;