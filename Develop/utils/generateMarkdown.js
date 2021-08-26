//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license == 'MIT'){
    console.log('MIT Chosen')
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license == 'Apache 2.0'){
    console.log('Apache Chosen')
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license == 'Mozilla Public 2.0'){
    console.log('Mozilla Chosen')
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license == 'GNU GPL'){
    console.log('GNU Chosen')
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
}

//function that returns the installation instructions
// If there is no license, return an empty string
function renderInstall (res) {
  let useInstall;
  if (res.install){
    console.log('install chosen')
    useInstall = `## Installation
    ${res.install}`
  } else {
    console.log('no install chosen')
    useInstall = ''
  }
  console.log(useInstall)
  return useInstall
  
}
//function to render description
function renderDescription(res){
  console.log('description included')
  if (res.helper){
    console.log('use helper chosen')
    const desList = res.tech
    const desArray = desList.map((item, i) => `${i+1}. ${item}\n`).join('')
    return `Technology used
${desArray}
## Purpose
${res.function}
## Challenges 
${res.challenges}`
  } else{
    console.log('custom description chosen')
    return `${res.custom}`
  }
}
//new function to render table of contents
//if no table of contents selected return an empty string
function renderTableOfContents(res){

  if(res.table){
    console.log('table of contents included')
    const tableSections = res.sections
    const tableArray = tableSections.map((item, i) => `${i+1}. [${item}](#${item})\n`).join('')

    return `## Table of contents
${tableArray}`
  } else {
    console.log('no table of contents included')
    return ''
  }
}

//function to render usage section
//if there is no usage section return an empty string
function renderUsage(res) {
  let useUsage;
  if (res.usage){
    console.log('usage included')
    useUsage = `## Usage
    ${res.usage}`
  } else {
    useUsage = ''
    console.log('no usage included')
  }
  return `${useUsage}`
}

//function to render contributing section
//if there is no contributing section return an empty string
function renderContributing(res){
  let useContributing;
  if (res.contributing){
    console.log('contributing included')
    useContributing = `## Contributing
    ${res.contributing}`
  } else {
    useContributing = ''
    console.log('no contributing included')
  }
  return `${useContributing}`
}
//function to render tests section
//if there is not tests section return an empty string
function renderTests(res){
  let useTests;
  if (res.tests){
    console.log('tests included')
    useTests = `## Testing Information
    ${res.tests}`
  } else {
    useTests = ''
    console.log('no tests included')
  }
  return `${useTests}`
}
//function to render questions section
//if there is no tests section return and empty string
function renderQuestions(res){
  let useQuestions;
  if(res.questionsGit || res.questionsEmail){
    console.log('questions section included')
    useQuestions = `## Questions
  github.com/${res.questionsGit}/  
  ${res.questionsEmail}`
  } else{
    console.log('questions section not included')
    useQuestions = ''
  }
  return useQuestions
}

//function to generate markdown for README
function generateMarkdown(data) {

  var badge; 
  if(data.license){
    badge = renderLicenseBadge(data.license)
  } else {
    console.log('no badge chosen')
    badge = ''
  }

  const includeTableOfContents = renderTableOfContents(data)
  const includeDescription = renderDescription(data)
  const includeInstallData = renderInstall(data)
  const includeUsage = renderUsage(data)
  const includeContributing = renderContributing(data)
  const includeTests = renderTests(data)
  const includeQuestions = renderQuestions(data)
  
  return `# ${data.title} ${badge}
${includeTableOfContents} 
## Description
${includeDescription}
${includeInstallData}
${includeUsage}
${includeContributing}
${includeTests}
${includeQuestions}`;
}

module.exports = generateMarkdown;
