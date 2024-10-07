declare namespace Cypress {
  interface Chainable<Subject = any> {
    checkConsentDialogue(): Chainable<any>;
    checkButtonsLayer(): Chainable<any>;
  }
}

Cypress.Commands.add("checkConsentDialogue", () => {
  cy.get("body").then(($body) => {
    if ($body.find("#qc-cmp2-ui").length > 0) {
      cy.get("#qc-cmp2-ui").within(() => {
        cy.contains("button", "AGREE").click();
      });
    }
  });
});

Cypress.Commands.add("checkButtonsLayer", () => {
  cy.get("body").then(($body) => {
    if ($body.find("buttonsLayer").length > 0) {
      cy.get("buttonsLayer").within(() => {
        cy.get("button-2").click();
      });
    }
  });
});
