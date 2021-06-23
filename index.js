// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use for your project.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which license would you like to use for your project?',
            choices: ['The Unlicense', 'MIT', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'Boost'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please list any contributing parties.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Whats your github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Write any tests for your application.',
            name: 'test',
        },
    ])

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}
    .then((answers) => {
        console.log(answers);

        let readMeFile = `# ${answers.title} \n
## Description
${answers.description} \n 
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license) \n

## Installation
${answers.installation} \n

## Usage
${answers.usage}\n

## Contributing
${answers.contributing} \n

## Tests
${answers.test} \n 

## Questions
If you have any questions about my project, please find me on <a href="https://github.com/${answers.github}/" target="blank">GitHub</a>! \n

## License
-----------
`;

        fs.writeFile('test.md', readMeFile, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();