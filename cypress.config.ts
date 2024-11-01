import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Results",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: true,
  },

  e2e: {
    baseUrl: "https://practice.automationtesting.in/",
    viewportWidth: 1440,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
