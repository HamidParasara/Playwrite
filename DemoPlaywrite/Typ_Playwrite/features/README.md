Playwright TypeScript Framework
This repository contains a Playwright framework using TypeScript for automated browser testing. The framework is designed to perform end-to-end testing of web applications.

Folder Structure
arduino
Copy code
├── features
│   └── login.feature
├── step-definitions
│   └── login.steps.ts
├── pages
│   └── login.ts
├── package.json
├── tsconfig.json
├── .env
├── jest.config.js
└── jest.allure.config.js
The features folder contains the Gherkin feature files written in the Cucumber syntax.
The step-definitions folder contains the step definition files that define the mapping between the Gherkin steps and the test code.
The pages folder contains the page object files that encapsulate the interactions and elements of the web pages.
The package.json file contains the project configuration and dependencies.
The tsconfig.json file contains the TypeScript compiler configuration.
The .env file stores environment variables and configuration settings.
The jest.config.js file contains the Jest configuration for running tests and generating Allure reports.
The jest.allure.config.js file is a specific configuration file for the Allure reporter.
Prerequisites
Before running the tests, make sure you have the following prerequisites installed:

Node.js (version X.X.X)
npm (version X.X.X)
Playwright (specific browser module, e.g., playwright-chromium)
Setup and Usage

Install the dependencies:


npm install
Configure the necessary environment variables in the .env file.

Run the tests:


npm test
This command will execute the test cases and generate Allure reports.

Generate Allure HTML reports:


npm run allure:generate
This command will generate HTML reports based on the generated Allure results.

Open the generated Allure report:

npm run allure:open
This command will open the Allure report in your default browser.

Additional Commands
npm run test:allure: Run the tests and generate Allure reports.
npm run allure:generate: Generate Allure HTML reports.
npm run allure:open: Open the Allure report.