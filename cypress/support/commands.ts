declare namespace Cypress {
  interface Chainable<Subject = any> {
    checkConsentDialogue(): Chainable<any>;
    checkButtonsLayer(): Chainable<any>;
    verifyListOfGames(gameList: string[]): Chainable<any>;
    login(email: string, password: string): void;
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

Cypress.Commands.add("verifyListOfGames", (gameList) => {
  gameList.forEach((game) => {
    cy.checkButtonsLayer();
    cy.get(".GameCard-caption-c7oyveBC").contains(game).should("be.visible");
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.contains("button", "Sign in").click();
  cy.get('[id="email"]', { timeout: 10000 }).clear().type(email);
  cy.get('[id="password"]', { timeout: 10000 }).clear().type(password);
  cy.contains("button", "Submit").click();
});
