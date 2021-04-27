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
    name: 'engineer Name',
    message: 'Engineer: Your name?',
    default: 'Engineer John',
  },

];

var internQuestions = [
  {
    type: 'input',
    name: 'intern name',
    message: 'Intern: Your name?',
    default: 'Intern John',
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