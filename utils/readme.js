// generates readme file including user entered data
const readme = (data) => {
    return `# ${data.title}

![license](https://img.shields.io/badge/License-${data.license}-orange)

## Description

${data.description}

![${data.image}](images/${data.image})

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribution Guidelines](#contribution-guidelines)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Run the following command to install node modules:

_${data.installation}_

## Usage

${data.usage}

## License

This project is licensed under ${data.license}

## Contribution Guidelines

${data.contribution}

## Tests

Run the following command in the terminal to run tests:

_${data.test}_

## Questions

If you have any questions regarding this repo, you may contact me at ${data.email}. To see my other work, follow this link: [GitHub](https://github.com/${data.github}/).`;
}

module.exports = readme;