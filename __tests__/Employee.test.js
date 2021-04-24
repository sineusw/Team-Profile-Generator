const {Employee} = require('../lib/classes.js');

describe('Testing the Intern Class', ()=>{
  const employee = new Employee('John', 1234, 'john@gmail.com'); 

    it('creates an gets the email', ()=>{
      expect(employee.getEmail()).toBe('john@gmail.com'); 
    }); 

    it('gets the id', ()=>{
        expect(employee.getId()).toBe(1234); 
    }); 

    it('gets the right name', ()=>{
      expect(employee.getName()).toBe('John'); 

    })

    it('returns the right role', ()=>{
      expect(employee.getRole()).toBe('Employee')
    })
})
