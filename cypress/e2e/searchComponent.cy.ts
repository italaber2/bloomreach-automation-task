describe("Validate categories", () => {
  before(() => {
    cy.step("Visit homepage and check for consent dialogue");
    cy.visit("");
    cy.url().should("eq", "https://www.arkadium.com/");
    cy.checkConsentDialogue();
  });

  it("Validate all categories", () => {
    cy.fixture("categories").then((categories) => {
      cy.step("Navigate to search component and verify categories");
      const gamesCategories = categories.categories;

      cy.get('[data-element-description="nav-search-button"]').click();

      gamesCategories.forEach((category: string) => {
        cy.get('[data-element-description="search-games"]')
          .clear()
          .type(category);
        cy.contains(category).should("be.visible");
      });
    });
  });
});
