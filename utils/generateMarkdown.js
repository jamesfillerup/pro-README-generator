// TODO: Create a function that returns a license badge based on which license is passed in
// function generateMarkdown(data) {
//   const {
//     title,
//     description,
//     installation,
//     usage,
//     credits,
//     license,
//     tests,
//     email,
//   } = data;
//   return `
//     # Professional README Generator

// ## Description

// This project was built to aid in making a README.md file. It is designed to simplify the process of making a README for projects by automating some of the work such as formatting and page layout. The user should be be able to enter their information and have it generate a README with all of their information. I build this so that I don't have to reinvent the wheel every time but rather build a good README generator once that will make it easier for me later down the road.

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [Function](#function)
// - [Credits](#credits)
// - [License](#license)


// ## Installation

// You can install this by opening up the page on GitHub and cloning it to your computer using bash or terminal. Once cloned it can be opened up on VS Code.

// Please see video link for a walk through on how to clone it.

// [Clone to your computer](https://drive.google.com/file/d/15ogCY3Q-JLWhteoSiIoXLkhtK4Z0-mfz/view?usp=sharing "Click Me!")
// <br><br>

// ## Usage

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     \```md
//     ![alt text](assets/images/screenshot.png)
//     ``\`

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you followed tutorials, include links to those here as well.

// https://www.youtube.com/watch?v=Pp9IG-prQjE

// ## License

// MIT

// ---

// ## Tests

// To test this application run { npm test } in bash

// ## Contact Me

// jamesfillerup9@gmail.com
// `


// }
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "APACHE":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
      case "BOOST":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
      case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Function](#function)
- [Credits](#credits)
- [License](#license)


## Installation

You can install this by opening up the page on GitHub and cloning it to your computer using bash or terminal. Once cloned it can be opened up on VS Code.

Please see video link for a walk through on how to clone it.

[Clone to your computer](https://drive.google.com/file/d/15ogCY3Q-JLWhteoSiIoXLkhtK4Z0-mfz/view?usp=sharing "Click Me!")
<br><br>

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseBadge(data.license)}

---

## Tests

To test this application run { npm test } in bash

## Contact Me

${data.email}

`;
}

module.exports = generateMarkdown;
