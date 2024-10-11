interface GemPrice {
  quantity: string;
  price: string;
}

describe("Validate gem prices", () => {
  before(() => {
    cy.step("Visit homepage and check for consent dialogue");
    cy.visit("https://www.arkadium.com/");
    cy.checkConsentDialogue();
  });

  it("Validate gem prices", () => {
    cy.fixture("gemPrices").then((data) => {
      const gemPrices: GemPrice[] = data.gemPrices;

      cy.step("Log in");
      cy.login(
        Cypress.env("ARKADIUM_USERNAME") as string,
        Cypress.env("ARKADIUM_PASSWORD") as string
      );
      cy.get('[data-testid="avatars-list-item"]', { timeout: 10000 }).should(
        "be.visible"
      );

      cy.step("Navigate to the shop");
      cy.get('[data-element-description="nav-shop-button"]').click();

      cy.step("Validate the number of gems and price");
      cy.get(".GemCard-value-r3z3PlZF").should("have.length", gemPrices.length);
      gemPrices.forEach((gemPrice, index) => {
        cy.get(".GemCard-value-r3z3PlZF")
          .eq(index)
          .should("have.text", gemPrice.quantity);

        cy.get(".GemCard-button-yJ__zryn")
          .eq(index)
          .should("have.text", gemPrice.price);
      });
    });
  });
});
