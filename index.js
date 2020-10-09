const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const readme = require("./utils/readme");

const questionList = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of you project"
    },
    {
        type: "input",
        name: "image",
        message: "Input a destination for an image (ex: image.png, ensure the file is in a folder named 'images')"
    },
    {
        type: "input",
        name: "installation",
        message: "What command needs to be run for the installation of node modules for this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What usage infromation does the user need for this project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidlines for this repo?"
    },
    {
        type: "input",
        name: "test",
        message: "What command needs to be run to run tests for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project use?",
        choices: ["APACHE2.0", "GPL3.0", "MIT", "BSD3", "BSL1.0", "CCZ1.0", "EPL2.0"]
    },
    {
        type: "input",
        name: "github",
        message: "What is you GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
]
// writes to a readme file in this directory using user input data
function writeReadme(file, data) {
    return fs.writeFileSync(path.join(process.cwd(),file), data);
};

// prompts the user with the list of questions
inquirer.prompt(questionList)
.then((res) => {
    writeReadme("README.md", readme({...res}));
});

