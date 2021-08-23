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
    name: 'toc'
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
const writeReadMe = ({title, description, toc}) => 
`
## ${title}
## Description
${description}
## Table of contents
${toc}`

function writeToFile (res){
    const tocList = res.toc.split(',').map((item, i) => `${i+1} ${item}\n`).join('')
    ['one', 'two', 'three']
    ['- one', '- two', '-three']
    ` -one 
        -two
        -three`
   return `
    ## ${res.title}
    ## Description
    ${res.description}
    ## Table of contents
    ${tocList}
    
    <li>toc item1</li>
    <li>toc item2</li>
    <li>toc item3</li>`
}

// TODO: Create a function to initialize app
function init() {
    iq.prompt(questions)
    .then(function(response){
        console.log(response)
        const filename = response.title
        console.log(filename)

        //fs function to write file
        fs.writeFile(`README.md`, writeToFile(response), function(err){
            if (err) return console.log(err);
            console.log('success')
        })


    })
}


// Function call to initialize app
init();
