// in addition to Employees(name, id, email), include (school)
// include method getSchool()
// getRole() overidden in favor of Intern

const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;