// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = `![${license}](https://img.shields.io/badge/License-${license}-success)`;
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    let link = `https://opensource.org/licenses/${license}`
    return link
  } else {
    return link = ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseSection = 
    `## License

  ${license} ${renderLicenseLink(license)}
    `
    return licenseSection
  } else {
    const licenseSection = ``
    return licenseSection
  }
}

function renderTable(table) {
  if (table == 'Y') {
    const tableContents = 
    `## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    `
    return tableContents
  } else {
    const tableContents = ``
    return tableContents
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(prompt) {
  return `# ${prompt.title} ${renderLicenseBadge(prompt.license)}

  ## Description

  ${prompt.description}
  
  ${renderTable(prompt.table)}
  ## Installation: 

  ${prompt.installation}

  ## Usage: 

  ${prompt.usage}

  ${renderLicenseSection(prompt.license)}

  ## Contributing

  ${prompt.contributing}

  ## Tests

  ${prompt.tests}

  ## Questions

  https://github.com/${prompt.github}
  
  ${prompt.email}
  `;
}

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderTable;
