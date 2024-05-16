# Automation API

Automation API is a project for automating tests implemented with Cypress. It includes various dependencies for testing web applications, API, and generating test reports.

## Installation

To install and run the project locally, follow these steps:

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js: Install Node.js from the [official Node.js website](https://nodejs.org/).
- Cypress 13.9.0: Install Cypress using npm:

```bash
npm install cypress@13.9.0 --save-dev
```
Git: Install Git from the official Git website.

Setup
Clone the GitHub repository:
```bash
git clone <url-do-seu-repositorio>
```
Navigate to the project directory:
```bash
cd automation-api
```
Install project dependencies:
```bash
npm install
```
Usage
To run the Cypress tests, use the following commands:

```bash
npm run cy
This command runs all tests headlessly.
```

To open the Cypress Test Runner and run tests interactively, use:

```bash
npm run cy:open
```

## Scripts

The project includes the following npm scripts:

- cy: Runs all Cypress tests headlessly.
- cy:open: Opens the Cypress Test Runner for interactive test execution.
- test: Executes Cypress tests, merges Mochawesome reports, and generates HTML - reports.
- report: Merges Mochawesome reports and generates HTML reports.
- report:open: Opens the generated HTML report in the default browser.
- report:merge: Merges Mochawesome reports into a single JSON file.
- report:generate: Generates HTML reports from the merged JSON file.