// TODO: Include packages needed for this application
iq = require('inquirer')
fs = require('fs')
console.log(iq)
console.log(fs)
var date = new Date()
var year = date.getFullYear();
console.log(year)

//Badges
//MIT License badge
const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
const mitInfo = `copyright ${year}
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
console.log(mitInfo)
//Apache License badge
const apacheBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

//Description questions
const descriptionPrompt = [{
    type: 'input',
    message: 'what does the application do?',
    name: 'function'
},{
    type: 'checkbox',
    message: 'what technologies were used?',
    choices: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Other'],
    name: 'tech'
},{
    type: 'input',
    message: 'what challenges did you face?',
    name: 'challenges'
}]

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
    default: 'description,installation,usage,license,contributors,testing,questions'
},{
    type: 'input',
    message: 'Enter installation instructions',
    name: 'installation'
},{
    type: 'input',
    message: 'Enter usage instructions',
    name: 'usage'
},{
    type: 'list',
    message: 'chose a license',
    name: 'lic',
    choices: ['Apache', 'MIT']
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
    message: 'Enter e-mail',
    name: 'questions'
}];

// TODO: Create a function to write README file
function writeToFile (res){
    const tocList = res.toc.split(',').map((item, i) => `${i+1}. [${item}](#${item}) \n`).join('')
    let licInfo = JSON.stringify(res.lic)
    console.log(res.lic)
    console.log(typeof(licInfo))

    var badge;
    var info;

    if (res.lic === 'MIT'){
        var badge = mitBadge
        var info = mitInfo
    } else {badge = apacheBadge}


   return `
# ${res.title} ${badge}
## Description
${res.description}
## Table of contents
${tocList}
## Installation
${res.installation}
## Usage
${res.usage}
## License
${info}
## contributors
${res.contribute}
## Testing
${res.test}
## Questions
${res.questions}`
}

// TODO: Create a function to initialize app
function init() {
    iq.prompt(questions)
    .then(function(response){

        console.log(response)
        console.log(response.lic)
       
        //fs function to write file
        fs.writeFile(`README.md`, writeToFile(response), function(err){
            if (err) return console.log(err);
        })


    })
}


// Function call to initialize app
init();
