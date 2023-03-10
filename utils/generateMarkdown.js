// takes in answers and returns based on license selected
function renderLicenseBadge(license) {
  console.log("Rendering lIcense badge");
  console.log(license);
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

// renders license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `- [License](#license)`;
}

// adds license section if license is selects
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  var header = `## License \n`;
  switch (license) {
    case "MIT":
      return (
        header +
        `This program is covered by the ${license} license. The MIT license allows users to reuse code for any purpose as long as orginal MIT license is included`
      );
    case "GNU GPLv3":
      return (
        header +
        `This program is covered by the ${license} license. The GNU license allows users to share and modify a project without paying, but it must remain unde this license.`
      );
    case "Apache License 2.0":
      return (
        header +
        `This program is covered by the ${license} license. The Apache license allows users to reuse code for any purpose, but users must disclose if changes are made to the source code.`
      );
    default:
      return "";
  }
}

// takes answers from inquirer and writes them out
function generateMarkdown(data) {
  return `# ${data.project}
  
${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation
${data.install}

## Usage
${data.use}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Features
${data.features}

## How to Contribute
${data.contribution}


## Tests
${data.tests}

## Questions
For any questions, you can reach me here:

[My Github](${data.GitHub})
or at ${data.email}
`;
}
// epxorts info from generate markdown
module.exports = generateMarkdown;
