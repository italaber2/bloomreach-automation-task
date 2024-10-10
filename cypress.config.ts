import { defineConfig } from "cypress";
import { join } from "path";
import { exec } from "child_process";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Inline Reporter",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: true,
  },

  e2e: {
    baseUrl: "https://www.arkadium.com",
    viewportWidth: 1440,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // Open the report automatically after the test run
      on("after:run", () => {
        exec("npm run generate-report", (err) => {
          if (err) {
            console.error(`Failed to generate report: ${err.message}`);
          } else {
            const reportPath = join(
              __dirname,
              "mochawesome-report",
              "mochawesome.html"
            );
            exec(`open ${reportPath}`, (openErr) => {
              if (openErr) {
                console.error(`Failed to open report: ${openErr.message}`);
              }
            });
          }
        });
      });
    },
  },
});
