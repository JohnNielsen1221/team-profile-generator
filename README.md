# Team Profile Generator
>A program that allows users to create a webpage with their teams' information.

## Table of contents
* [General info](#general-info)
* [Installation](#installation)
* [Tests](#tests)
* [Functionality](#functionality)
* [Status](#status)
* [Link](#link)
* [License](#license)
* [Contact](#contact)

## General info
This app will allow you to use the command line to enter information about your team, after which a HTML page will be generated with the information that was provided through the command line.

## Installation
Steps required to install project and how to get the development environment running:

To generate your Team Webpage:

Clone this repository to your own system.
Run npm install from the command line in the root directory, then install the following npm package dependencies as specified in the package.json:
 - npm install inquirer - will prompt you for your inputs from the command line
 - npm install --save-dev jest - If you would like to run the tests
The application itself can be invoked with node index.js.

## Tests
Here are the commands to run the tests:
npm run test Employee
npm run test Manager
npm run test Engineer
npm run test Intern

## Functionality
When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your Team, starting with the Manager position. After the Manager information is input, the you will then be able to choose if you would like to add an Engineer or an Intern, or if the team is done being built. If you choose to add an Engineer or Intern, follow-up questions will be asked about those team members. 
Once you are done building your team and choose "No, my team is complete", then an HTML page will be generated into your 'dist' folder.
After opening the generated HTML page, you will see your team name across the top, along with each team member you created inside a card. You are then able to click on the team member's email address to auto-open your default email with their email address populated in the "To" field. You are also able to click on an Engineers GitHub name to be taken to their Repo.

## Status
Project is: _complete_ (for now)

## Links
Respository Link - https://github.com/JohnNielsen1221/team-profile-generator


## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact
Created by John Hayes Nielsen - johnhayesnielsen@gmail.com