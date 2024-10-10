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

      cy.step("Log in and navigate to the gem prices section");

      // Log in
      cy.contains("button", "Sign in").click();
      cy.get('[id="email"]', { timeout: 10000 })
        .clear()
        .type("testtaskuser@arkadium.com");
      cy.get('[id="password"]', { timeout: 10000 }).clear().type("Test123123");
      cy.contains("button", "Submit").click();

      // Wait for the avatars list to be visible
      cy.get('[data-testid="avatars-list-item"]', { timeout: 10000 }).should(
        "be.visible"
      );

      // Navigate to the gem prices section
      cy.get('[data-element-description="nav-shop-button"]').click();

      // Validate the number of gem cards
      cy.get(".GemCard-value-r3z3PlZF", { timeout: 10000 }).should(
        "have.length",
        gemPrices.length // Use the length of the gemPrices array
      );

      // Iterate through each gem card and validate values
      gemPrices.forEach((gemPrice, index) => {
        cy.get(".GemCard-value-r3z3PlZF")
          .eq(index)
          .should("have.text", gemPrice.quantity); // Directly compare as strings

        cy.get(".GemCard-button-yJ__zryn")
          .eq(index)
          .should("have.text", gemPrice.price); // Directly compare as strings
      });
    });
  });
});
