// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([{
            type: 'input',
            message: 'What would you like the title of your README.md for your app to be?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your app.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the installation process for your app?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How does someone use your app?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            choices: ['The Unlicense', 'MIT', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'Boost'],
            name: 'license',
        },
        {
            type: 'input',
            message: '',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Whats your github username?',
            name: 'github',
        },
        // {
        //     type: 'input',
        //     message: '',
        //     name: 'questions',
        // },
        // {
        //     type: '',
        //     message: '',
        //     name: '',
        // },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();