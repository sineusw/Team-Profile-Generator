const {Manager} = require('../lib/classes.js');

describe('Testing the Intern Class', ()=>{
  const manager = new Manager('John', 1234, 'john@gmail.com', '112234495'); 

    it('creates an gets the email', ()=>{
      expect(manager.getEmail()).toBe('john@gmail.com'); 
    }); 

    it('gets the id', ()=>{
        expect(manager.getId()).toBe(1234); 
    }); 

    it('gets the Office Number', ()=>{
        expect(manager.getOfficeNumber()).toBe('112234495')
    })
    it('gets the right name', ()=>{
      expect(manager.getName()).toBe('John'); 

    })

    it('returns the right role', ()=>{
      expect(manager.getRole()).toBe('Manager')
    })
})

