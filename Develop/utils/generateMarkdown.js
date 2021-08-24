// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    console.log('MIT chosen')
  }

  if (license === 'Apache'){
    console.log('Apache chosen')
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
## What does it do?
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


  return `# ${data.title}
${useToc}
## Description
${newDesc}`;
}

module.exports = generateMarkdown;
