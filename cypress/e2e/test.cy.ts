it("Validates games listed on the Best page", () => {
  cy.fixture("example.json").then((data) => {
    const games = data.games;

    cy.step("Visit homepage and check for consent dialogue");
    cy.visit("");
    cy.url().should("eq", "https://www.arkadium.com/");
    cy.checkConsentDialogue();

    cy.step("Navigate to best games and verify list of best games");
    cy.get('[data-testid="Best"]').click();
    games.forEach((game: string) => {
      cy.checkButtonsLayer();
      cy.contains(game).should("be.visible");
    });
  });
});
