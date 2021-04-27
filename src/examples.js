/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */
const generateHTML = require('./generateHtml.js')
 'use strict';
 //THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

//  WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
 var inquirer = require('inquirer');

 var output = [];
 
  var choices = [
    
      {
        type: 'checkbox',
        message: 'Select',
        name: 'choice',
        choices: [
          {
            name: 'Create Engineer',
          },
          {
            name: 'Create Intern',
          },
          {
            name: 'Quit',
          },
       
        ],
        validate: function (answer) {
          if (answer.length < 1) {
            return 'You must choose at least one.';
          }
          return true;
        },
      },

  //  {
  //    type: 'confirm',
  //    name: 'askAgain',
  //    message: 'Want to add a new member (just hit enter for YES)?',
  //    default: true,
  //  },
 ];

 var engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Engineer: Your name?',
    default: 'Engineer John',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Engineer: Your email?',
    default: 'engineer@gmail.com',
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
    name: 'id',
    message: 'Engineer: Your ID?',
    default: '1234',
  },
  
  {
    type: 'input',
    name: 'gitHub',
    message: 'Engineer: Your GitHub Username ?',
    default: 'johndoe',
  },



];

var internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Intern: Your name?',
    default: 'Intern John',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Intern: Your email?',
    default: 'intern@gmail.com',
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
    name: 'id',
    message: 'Intern: Your ID?',
    default: '1234',
  },
  
  {
    type: 'input',
    name: 'school',
    message: 'Manager: Your School?',
    default: 'Harvard',
  },


]


   function askChoice() {
  inquirer.prompt(choices).then((answers) => {

     if(answers.choice[0] === "Create Engineer"){
       createEngineer();
     } else if(answers.choice[0] === "Create Intern"){
       createIntern();
     } else {

       console.log('Bye!')
       generateHTML(output)
      return

     }

    })
  
   };
 
 function createIntern(){
   inquirer.prompt(internQuestions).then(answers => {
    output.push({type: 'intern', ...answers});
    askChoice(); 
   })
 }
 function createEngineer(){
   inquirer.prompt(engineerQuestions).then(answers => {
     output.push({type: 'engineer', ...answers})
     askChoice();
     
 })

}
 module.exports = {askChoice, choices, output}