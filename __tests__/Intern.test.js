const {Intern} = require('../lib/classes.js');

describe('Testing the Intern Class', ()=>{
  const intern = new Intern('John', 1234, 'john@gmail.com', 'Coding School'); 

    it('creates an intern', ()=>{
      expect(intern.getEmail()).toBe('john@gmail.com'); 
      expect(intern.getId()).toBe(1234); 
      expect(intern.getSchool()).toBe('Coding School') 
    })
    it('gets the right name', ()=>{
      expect(intern.getName()).toBe('John'); 

    })

    it('returns the right role', ()=>{
      expect(intern.getRole()).toBe('Intern')
    })
})

