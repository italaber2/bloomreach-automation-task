import "cypress-mochawesome-reporter/register";
import "cypress-plugin-steps";
import "./commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore errors that originate from application scripts
  if (err.message.includes("cross origin script")) {
    // returning false here prevents Cypress from failing the test
    return false;
  }

  // allow Cypress to fail the test for other uncaught exceptions
  return true;
});
