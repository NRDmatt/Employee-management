const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer.cjs');
const Intern = require('./lib/intern.cjs');
const Manager = require('./lib/manager.cjs');
const generateHTML = require('./src/generateHTML.cjs');
const express = require('express');
const app = express();
const port = 3001;

const teamMembers = [];

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the team manager\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the team manager\'s ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the team manager\'s email?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the team manager\'s office number?',
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the engineer\'s ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer\'s email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the engineer\'s GitHub username?',
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern\'s ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern\'s email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the intern\'s school?',
  },
];

const addAnotherTeamMemberQuestion = [
  {
    type: 'list',
    name: 'addAnotherTeamMember',
    message: 'Which type of team member would you like to add?',
    choices: [
      'Engineer',
      'Intern',
      'I do not want to add any more team members'
    ],
  },
];

const promptManagerQuestions = async () => {
  const answers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  teamMembers.push(manager);
  console.log('Manager has been added to your team!');
};

const promptEngineerQuestions = async () => {
  const answers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  teamMembers.push(engineer);
  console.log('Engineer has been added to your team!');
};

const promptInternQuestions = async () => {
  const answers = await inquirer.prompt(internQuestions);
  const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
  teamMembers.push(intern);
  console.log('Intern has been added to your team!');
};

const promptAddAnotherTeamMemberQuestion = async () => {
  const answer = await inquirer.prompt({
    type: 'list',
    name: 'addAnotherTeamMember',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
  });

  if (answer.addAnotherTeamMember === 'Engineer') {
    await promptEngineerQuestions();
  } else if (answer.addAnotherTeamMember === 'Intern') {
    await promptInternQuestions();
  } else {
    console.log('Thank you for providing all the team members information!');
    generateHTML(teamMembers);
  }
};

const init = async () => {
  console.log('Welcome to Team Profile Generator!');
  console.log('Please enter the team manager\'s information');
  try {
    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    console.log('Manager added successfully!');
    await promptAddAnotherTeamMemberQuestion();
  } catch (error) {
    console.error(error);
  }
};
const renderedHTML = generateHTML(teamMembers);
fs.writeFile('./dist/team.html', renderedHTML, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Team profile HTML file created successfully!');
  }
});

init();