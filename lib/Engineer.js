// in addition to Employee(name, id, email), also includes (github)
// include getGithub() method
// getRole() will override employee response, in favor of Engineer here.

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;