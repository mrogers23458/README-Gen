// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license == 'Apache 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license == 'Mozilla Public 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license == 'Mozilla Public 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license == 'GNU GPL'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//function to render Descript with helper
function renderDescription(res){
  const desList = res.tech
  const desArray = desList.map((item, i) => `${i+1}. ${item}\n`).join('')

  console.log(desList)
  console.log(desArray)

  return `Technology used
${desArray}
## Purpose
${res.function}
## Challenges 
${res.challenges}`
}
//function to render table of contents
function renderTable(res){
  const tableSections = res.sections
  const tableArray = tableSections.map((item, i) => `${i+1}. [${item}](#${item})\n`).join('')
  console.log(tableArray)

  return `## Table of contents
${tableArray}`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var useToc;
  if (data.table){
    useToc = renderTable(data) 
  } else {useToc = ''}

  var newDesc;
  if (data.helper){
    newDesc = renderDescription(data)
  } else { newDesc = data.custom}

  var badge = renderLicenseBadge(data.license)
  console.log(badge)

  return `# ${data.title} ${badge} 
${useToc}
## Description
${newDesc}
## Install
${data.install}`;
}

module.exports = generateMarkdown;
