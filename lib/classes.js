class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName(){
    return this.name;
    }
    getId(){
    return this.id;
    }
    getEmail(){
    return this.email;
    }
    
    getRole(){
    return 'Employee'
    }
    }
    
    class Manager extends Employee {
    
    constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getRole(){
    return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber
        }
    
    }
    
    class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
    }
    
    getGithub(){
    return this.github;
    }
    
    getRole(){
    return 'Engineer';
    }
    
    }
    
    class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email)
    this.school = school;
    }
    
    getSchool(){
    return this.school;
    }
    
    getRole(){
    return 'Intern';
    }
    }
    
    
    
    module.exports = {Intern, Engineer, Manager, Employee};
    
    // const john = new Employee('John doe', 1234, 'john@gmail.com')