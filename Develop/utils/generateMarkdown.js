// Function to get the license badge
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// Function to get the license link
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return '';
  }
}

// Function to get the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) License.`;
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

For questions about the project, please contact [${data.author}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
