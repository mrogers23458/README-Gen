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
  const descList = res.tech
  const desArray = descList.map((item, i) => `${i+1}. ${item}\n`).join('')

  console.log(descList)
  console.log(desArray)

  return `Technology used
${desArray}
## What does it do?
${res.function}
## Challenges 
${res.challenges}`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var useToc;
  if (data.table)
  var newDesc;
  if (data.helper){
    newDesc = renderDescription(data)
  } else { newDesc = data.custom}


  return `# ${data.title}
## Description
${newDesc}`;
}

module.exports = generateMarkdown;
