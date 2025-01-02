const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureWriter(on, config);
      return config;
    },
    
    baseUrlAPI: "http://localhost:7081",
  },
  chromeWebSecurity: false,
  
    "reporter": "mocha-allure-reporter",
    "reporterOptions": {
      "resultsDir": "allure-results"
    },
    env: {
      allureReuseAfterSpec: true,
    }
  
  
});