// TODO: Include packages needed for this application ✅
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input ✅
// const questions = [];
inquirer
    .prompt([
        // {
        //     type: 'input',
        //     message: 'What is the name of your project?',
        //     name: 'title',
        // },
        // {
        //     type: 'input',
        //     message: 'Describe your project.',
        //     name: 'description',
        // },
        // {
        //     type: 'input',
        //     message: 'What are the steps required to install your project?',
        //     name: 'installation',
        // },
        // {
        //     type: 'input',
        //     message: 'Provide instructions and examples for use for your project.',
        //     name: 'usage',
        // },
        {
            type: 'list',
            message: 'Which license would you like to use for your project?',
            choices: ['The Unlicense', 'MIT', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'Boost'],
            name: 'license',
        },
        // {
        //     type: 'input',
        //     message: 'Write any tests for your application.',
        //     name: 'test',
        // },
        // {
        //     type: 'input',
        //     message: 'Please list any contributing parties.',
        //     name: 'contributing',
        // },
        // {
        //     type: 'input',
        //     message: 'Whats your github username?',
        //     name: 'github',
        // },
        // {
        //     type: 'input',
        //     message: 'Whats your email?',
        //     name: 'email',
        // },
    ])

    // TODO: Create a function to write README file ✅
    .then((answers) => {
        // console.log(answers);

        let licenseChoice;

        licenseChoice = answers.license
        // console.log(licenseChoice);

        if (licenseChoice === 'MIT') {
           licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
           licenseText = `
Copyright

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        } else if (licenseChoice === 'The Unlicense') {
            licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            licenseText = ""
        } else if (licenseChoice === 'Apache 2.0 License') {
            licenseBadge =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            licenseText = ""
        } else if (licenseChoice === 'Mozilla Public License 2.0') {
            licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            licenseText = ""
        } else if (licenseChoice === 'Boost') {
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            licenseText = ""
        } 
        
        let readMeFile = `# ${answers.title} \n
## Description
${licenseBadge} \n
${answers.description}  \n 
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
If you have any questions about my project, please send me an  <a href="mailto:${answers.email}/" target="blank">email</a>. \n
Find me on <a href="https://github.com/${answers.github}/" target="blank">GitHub</a> too! \n

## License
 ${licenseText} \n
`;


        fs.writeFile('./createdREADMEs/test1.md', readMeFile, (err) =>
            err ? console.error(err) : console.log('Success!')
        );


    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();