// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./src/readme-template");
const writeFile = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is your name? (Required)",
  "what is the project title? (Required)",
  "Give a project description. (Required)",
  "What are the steps required to install your project? (Leave blank if none.)",
  "What is the usage of the project? Provide instructions and examples for use.",
  "List all your collaborators, if any, separated by commas. (Example: John Smith, Jane Doe) (Leave blank to omit Credits section.)",
  "If your project has a lot of features, list them here separated by commas. (Example: Feature One, Feature Two) (Leave blank to omit Features section.)",
  "Provide a link to the GitHub repo. (Leave blank if none.)",
  "Provide a link to the deployed page. (Leave blank if none.)",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: questions[0],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: questions[1],
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: questions[2],
      validate: (descInput) => {
        if (descInput) {
          return true;
        } else {
          console.log("Please enter a description for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: questions[3],
    },
    {
      type: "input",
      name: "usage",
      message: questions[4],
    },
    {
      type: "input",
      name: "collab",
      message: questions[5],
    },
    {
      type: "input",
      name: "features",
      message: questions[6],
    },
    {
      type: "input",
      name: "repo",
      message: questions[7],
    },
    {
      type: "input",
      name: "deploy",
      message: questions[8],
    },
  ]);
};

// Function call to initialize app
init()
  .then((projectData) => {
    return generateMarkdown(projectData);
  })
  .then((pageMD) => {
    return writeFile(pageMD);
  });
