interface gameLists {
  best: string[];
  seasonal: string[];
}

describe("Validate games lists", () => {
  let games: gameLists;

  before(() => {
    cy.fixture<gameLists>("gameLists.json").then((data) => {
      games = data;
    });
  });

  beforeEach(() => {
    cy.step("Visit homepage and check for consent dialogue");
    cy.visit("");
    cy.url().should("eq", "https://www.arkadium.com/");
    cy.checkConsentDialogue();
  });

  it("Validate best games list", () => {
    const bestGames = games.best;

    cy.step("Navigate to best games");
    cy.get('[data-testid="Best"]').click();

    cy.step("Verify best games");
    cy.verifyListOfGames(bestGames);
  });

  it("Validate seasonal games list", () => {
    const seasonalGames = games.seasonal;

    cy.step("Navigate to seasonal games");
    cy.get('[data-testid="Seasonal Games"]').click();

    cy.step("Verify seasonal games");
    cy.verifyListOfGames(seasonalGames);
  });
});
