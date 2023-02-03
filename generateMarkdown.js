// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = `![${license}](https://img.shields.io/badge/License-${license}-success)`;
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ``
  if (license) {
    let link = `(https://opensource.org/licenses/${license})`
    return link
  } else {
    return link
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseSection = 
      `## License
      ${license} ${badge} ${link}
    `
    return licenseSection
  } else {
    const licenseSection = ``
    return licenseSection
  }
}

function renderTable(table) {
  if (table == 'Yes') {
    const tableContents = `
    ## Table of Contents (Optional)

    If your README is long, add a table of contents to make it easy for users to find what they need.

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    `
    return tableContents
  } else {
    const tableContents = ``
    return tableContents
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(prompt) {
  return `# ${prompt.title}

  ## Description

  ${description}
  
  ${tableContents}
  ## Installation: 

  ${installation}

  ## Usage: 

  ${usage}

  ${licenseSection}

  ## Contributing

  ${contributing}

  ## Tests

  ${tests}

  ## Questions

  ${questions}
  `;
}

module.exports = generateMarkdown;
