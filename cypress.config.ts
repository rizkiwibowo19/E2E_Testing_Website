const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'cw7ivk',
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'reports/mochawesome',
      charts: true,
      reportPageTitle: 'Cypress Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos',
      video: true, 
      screenshotOnRunFailure: true, 
    },
    env: {
      allureReuseAfterSpec: true,
      allureResultsPath: 'allure-results',
    },
  },
});
