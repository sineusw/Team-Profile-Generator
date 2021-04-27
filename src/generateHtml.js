const  {Engineer, Manager, Intern} = require('../lib/classes')
const fs = require('fs'); 
const path = require('path');

function generateHTML(output){
    const team = []
output.forEach((employee) => {
    const {type, name, id, email, officeNumber, gitHub, school} = employee;
    switch(type){
        case 'manager': 
const manager = new Manager(name, id, email, officeNumber); 
        team.push(manager)
        break; 
        case 'engineer': 
        const engineer = new Engineer(name, id, email, gitHub);
        team.push(engineer)
        break;
        case 'intern': 
        const intern = new Intern(name, id, email, school); 
        team.push(intern)
        break; 
        default: 
        return;
    }


}); 
const teamPath = path.join(__dirname, '../team.html')
const fileHeader = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team</title>
</head>
<body>
<div class="container">
`;

const fileFooter = `
</div>  
</body>
</html>`

fs.writeFileSync(teamPath, fileHeader);
team.forEach(member => {
    const {info, infoVal} = getInfo(member)
    const teamContent = `
          <div class="card">
        <div class="card-header">
        <h2>${member.getName()}</h2>
            <h3>${member.getRole()}</h3>
            </div>
            <div class="card-info">
         <p>ID: <span> ${member.getId()}</span></p> 
         <p>Email: <span>${member.getEmail()}</span></p>
            <p>${info}: <span>${infoVal}</span> </p>

          </div>
        </div>
    `
    fs.appendFileSync(teamPath, teamContent);
}); 

fs.appendFileSync(teamPath, fileFooter)

}


function getInfo(member){
    let extraInfo = {};
    const role = member.getRole(); 
    if(role === 'Manager') {
        extraInfo.info = 'officeNumber'; 
        extraInfo.infoVal = member.getOfficeNumber();
    } else if(role === 'Engineer'){
        extraInfo.info = 'gitHub'; 
        extraInfo.infoVal = member.getGithub();
    } else if(role === 'Intern') {
        extraInfo.info = 'School'; 
        extraInfo.infoVal = member.getSchool();
    }
    return extraInfo
}


module.exports = generateHTML;