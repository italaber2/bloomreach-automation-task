export class ShopPage {
  visitHomePage() {
    cy.visit("https://www.arkadium.com/");
    cy.url().should("eq", "https://www.arkadium.com/");
  }

  checkConsentDialogue() {
    cy.checkConsentDialogue();
  }

  verifyAvatar() {
    cy.get('[data-testid="avatars-list-item"]', { timeout: 10000 }).should(
      "be.visible"
    );
  }

  validateGemPrices(gemPrices: { quantity: string; price: string }[]) {
    cy.get(".GemCard-value-r3z3PlZF").should("have.length", gemPrices.length);

    gemPrices.forEach((gemPrice, index) => {
      cy.get(".GemCard-value-r3z3PlZF")
        .eq(index)
        .should("have.text", gemPrice.quantity);

      cy.get(".GemCard-button-yJ__zryn")
        .eq(index)
        .should("have.text", gemPrice.price);
    });
  }
}
