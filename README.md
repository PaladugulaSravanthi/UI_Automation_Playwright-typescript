Current Framework for the project has been implemented using playwright with typescript using Page Object Model and Allure is used for reporting 
For Code-coverage Istanbul with Babel plugin is used
Playwright Framework documentation can be followed from here - https://playwright.dev/docs/intro

--Installation Steps for the Framework
Below are the commands for thr step-by-step installation of the framework
- Playwright Installation -   npm init playwright@latest
- To run test-cases - npx playwright test

-- Allure Reporting Tool Installation 
- npm i -D @playwright/test allure-playwright

To generate an allure report for the test-cases following commands to be used
- npx playwright test --reporter=line,allure-playwright ( To run the tests)
- allure generate ./allure-results --clean (To generate allure reports)
- allure open ./allure-report (Opens the generated report in browser)

-- Code-Coverage Plugin - Istanbul with Babel and below commands to be used to install the plugin

- npm i -D @playwright/test babel-plugin-istanbul nyc

- npm i -D playwright-test-coverage

Details on the Framework structure:

- Tests Folder: In this Folder we are maintaining all the spec files for the Automation TestCases.

- pageObjects Folder: Locators of the WebPage are stored in this folder.

- Test-Data : Under test-data we are having a json file, where all the data which needs to be passed into the application is stored.

- Fixtures: To avoid code-reusability, we are storing the page object files and calling them within the specs.

-  Allure Report: Recently Generated Allure report is stored in this path.

-  playwright.config.ts : In this Config file, we are storing all the configuration with respect to framework like cross-bowser, cross-device and the timeouts for the application.

