// TODO: Include packages needed for this application
iq = require('inquirer')
fs = require('fs')
console.log(iq)
console.log(fs)
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter project title',
    name: 'title',
},{
    type: 'input',
    message: 'Enter proejct description',
    name: 'description'
},{
    type: 'input',
    message: 'Enter Table of Contents items',
    name: 'tableOfContents'
},{
    type: 'input',
    message: 'Enter installation instructions',
    name: 'installation'
},{
    type: 'input',
    message: 'Enter usage instructions',
    name: 'usage'
},{
    type: 'input',
    message: 'Enter usage license information',
    name: 'license'
},{
    type: 'input',
    message: 'Enter contributors',
    name: 'contribute'
},{
    type: 'input',
    message: 'Enter testing information',
    name: 'test'
},{
    type: 'input',
    message: 'Enter questions about the project',
    name: 'questions'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
