const inquirer = require('inquirer'); 
const {createOptions, askTvShow, tvQuestions} = require('./examples')
var questions = [
    {
      type: 'input',
      name: 'managerName',
      message: 'Manager: Your name?',
      default: 'Manager',
    },

    {
      type: 'input',
      name: 'managerEmail',
      message: 'Manager: Your email?',
      default: 'manager@gmail.com',
      validate: function(value){
        const pass = value.match(
/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        );
        if(pass){
          return true
        } 
        return 'Please enter a valid email'
      }
    },
      {
      type: 'input',
      name: 'managerID',
      message: 'Manager: Your ID?',
      default: '1234',
    },
    
    {
      type: 'input',
      name: 'managerOffice',
      message: 'Manager: Your Office Number?',
      default: '123456',
    },



];
 function askManagerQuestions(){
  let answersQuestions = []
  inquirer.prompt(questions).then((answers) => {
   askTvShow();
    answersQuestions = answers 
  })
  // });
}

askManagerQuestions()
 
