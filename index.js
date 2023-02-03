// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const renderLicenseBadge = require('./generateMarkdown');
const renderLicenseLink = require('./generateMarkdown');
const renderLicenseSection = require('./generateMarkdown');
const renderTable = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Supply a title.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Include Table of Contents? Y for yes, N for no.',
        name: 'table',
    },
    {
        type: 'input',
        message: 'Instructions for installation.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage instructions.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the license?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'How to contribute to the project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Examples on how to run provided tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your Email Address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(mdString) {
    fs.writeFile('README.md', mdString, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('README Generated!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const prompt = {
                title: response.title,
                description: response.description,
                table: response.table,
                installation: response.installation,
                usage: response.usage,
                license: response.license,
                contributing: response.contributing,
                tests: response.tests,
                email: response.email,
                github: response.github
            }

            const mdString = generateMarkdown(prompt);

            writeToFile(mdString);
        })
}

// Function call to initialize app
init();
