import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.arkadium.com",
    viewportWidth: 1440,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
