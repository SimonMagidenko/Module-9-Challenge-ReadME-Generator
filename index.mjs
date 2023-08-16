import inquirer from 'inquirer';
import fs from "fs/promises";

let { title, description, installation, usage, license, contributors, tests, questions } = await inquirer
    .prompt([
        {

            type: 'input',
            name: 'title',
            message: "What would you like your project title to be?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project? Provide a step-by-step installation process of how to get environment running.",
        },

        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for usage",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause'],

        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',


        },

        {
            type: 'input',
            name: 'questions',
            message: 'if you have any questions please contact me at (INSERT GITHUB URL HERE)',


        },
    ])



let readmeText = `
# ${title}


## Project Description
${description}

## Installation 
${installation}

## Usage
${usage}

## License 
${generateLicense(license)}

## Contributors
${contributors}

## Tests
${tests}

## Questions 
${questions}
`


fs.writeFile("GENERATEREADME.md", readmeText)


function generateLicense() {
    if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license === "BSD 3-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else {
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    }
}
