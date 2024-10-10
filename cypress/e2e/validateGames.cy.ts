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
    cy.step("Navigate to best games and verify list of best games");
    const bestGames = games.best;
    cy.get('[data-testid="Best"]').click();
    bestGames.forEach((bestGames) => {
      cy.checkButtonsLayer();
      cy.contains(bestGames).should("be.visible");
    });
  });

  it("Validate seasonal games list", () => {
    cy.step("Navigate to memory games and verify list of memory games");
    const seasonalGames = games.seasonal;
    cy.get('[data-testid="Seasonal Games"]').click();
    seasonalGames.forEach((seasonalGames) => {
      cy.checkButtonsLayer();
      cy.contains(seasonalGames).should("be.visible");
    });
  });
});
