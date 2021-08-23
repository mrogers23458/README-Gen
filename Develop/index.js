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
    message: 'Enter Table of Contents items separated by commas eg; (item1,item2,item3, ...): ',
    name: 'toc',
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
function writeToFile (res){
    const tocList = res.toc.split(',').map((item, i) => `${i+1} ${item}\n`).join('')

   return `
# ${res.title}
## Description
${res.description}
## Table of contents
${tocList}`
}

// TODO: Create a function to initialize app
function init() {
    iq.prompt(questions)
    .then(function(response){
        console.log(response)
       
        //fs function to write file
        fs.writeFile(`README.md`, writeToFile(response), function(err){
            if (err) return console.log(err);
        })


    })
}


// Function call to initialize app
init();
