const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const readme = require("./utils/readme").default;

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
        name: "instructions",
        message: "What command needs to be run for the installation of this project?",
        default: "npm i"
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
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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

function writeReadme(file, data) {
    return fs.writeFileSync(path.join(process.cwd(),file), data);
};

inquirer.prompt(questionList)
.then((res) => {
    console.log(res)
    writeReadme("README.md", readme({...res}));
});