import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
//import { MochawesomeReporterOptions } from 'cypress-mochawesome-reporter';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'reports/mochawesome',
      charts: true,
      reportPageTitle: 'Cypress Test Report',
      embeddedScreenshots: true,
      inlineAssets: true
    },

    env: {
      allureReuseAfterSpec: true,
      allureResultsPath: 'allure-results',
    },
  },
});
