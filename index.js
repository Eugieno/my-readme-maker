const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const userLicense = require('./utils/generateLicense')

console.log(userLicense.apacheLicense.notice)

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
      },
      {
        type: 'input',
        message: 'Input the title of your project',
        name: 'title'
      },
    {
        type: 'input',
        message: 'Write a brief description of your project',
        name: 'description'
      },
      {
        type: 'input',
        message: 'Installation guide',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'Usage of this app?',
        name: 'usage'
      },
      {
          type: 'list',
          message: 'Select a License',
          name: 'license',
          choices: ['MIT', 'Apache 2.0','GPL 3.0','BSD 3'],
          filter (answer) {
            if (answer == 'MIT') {
                return [userLicense.mitLicense.label, userLicense.mitLicense.badgeUrl, userLicense.mitLicense.notice]
            } else if (answer == 'Apache 2.0') {
                return [userLicense.apacheLicense.label, userLicense.apacheLicense.badgeUrl, userLicense.apacheLicense.notice]
            }
          }
        },
        {
          type: 'input',
          message: 'Who are the contributing authors?',
          name: 'contributing'
        },
        {
            type: 'input',
            message: 'Test',
            name: 'test'
          },
          {
            type: 'input',
            message: 'Questions',
            name: 'question'
          }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(),fileName),data, (err) =>
    err ? console.log(err) : console.log('Success!')
    )
}

// function to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

        writeToFile(filename, generateMarkdown(data))
      });
}

// function call to initialize program
init();
