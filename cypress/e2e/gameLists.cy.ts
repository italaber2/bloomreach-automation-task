import { HomePage } from "../pages/homePage";

interface gameLists {
  best: string[];
  seasonal: string[];
}

describe("Validate games lists", () => {
  const homePage = new HomePage();
  let games: gameLists;

  before(() => {
    cy.fixture<gameLists>("gameLists.json").then((data) => {
      games = data;
    });
  });

  beforeEach(() => {
    cy.step("Visit homepage and check for consent dialogue");
    homePage.visitHomePage();
    cy.checkConsentDialogue();
  });

  it("Validate best games list", () => {
    const bestGames = games.best;

    cy.step("Navigate to best games");
    homePage.navigateToBestGames();

    cy.step("Verify best games");
    cy.verifyListOfGames(bestGames);
  });

  it("Validate seasonal games list", () => {
    const seasonalGames = games.seasonal;

    cy.step("Navigate to seasonal games");
    homePage.navigateToSeasonalGames();

    cy.step("Verify seasonal games");
    cy.verifyListOfGames(seasonalGames);
  });
});
