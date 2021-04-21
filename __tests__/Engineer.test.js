const {Engineer} = require('../lib/classes.js');

describe('Testing the Intern Class', ()=>{
  const engineer = new Engineer('John', 1234, 'john@gmail.com', 'https://gitthub.com/johhdoe'); 

    it('creates an gets the email', ()=>{
      expect(engineer.getEmail()).toBe('john@gmail.com'); 
    }); 

    it('gets the id', ()=>{
        expect(engineer.getId()).toBe(1234); 
    }); 

    it('gets the gitHub', ()=>{
        expect(engineer.getGithub()).toBe('https://gitthub.com/johhdoe')
    })
    it('gets the right name', ()=>{
      expect(engineer.getName()).toBe('John'); 

    })

    it('returns the right role', ()=>{
      expect(engineer.getRole()).toBe('Engineer')
    })
})

