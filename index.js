// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'checkbox',
        message: 'Include Table of Contents?',
        choices: ['Yes', 'No'],
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
        message: 'Questions',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
                contributing: response.contributing,
                tests: response.tests,
                questions: response.questions
            }
        })
}

// Function call to initialize app
init();
