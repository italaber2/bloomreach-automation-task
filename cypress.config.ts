import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

dotenv.config();

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
    baseUrl: "https://www.arkadium.com",
    viewportWidth: 1440,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    env: {
      ARKADIUM_USERNAME: process.env.ARKADIUM_USERNAME,
      ARKADIUM_PASSWORD: process.env.ARKADIUM_PASSWORD,
    },
    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
