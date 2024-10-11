import { HomePage } from "../pages/homePage";

describe("Validate categories", () => {
  const homePage = new HomePage();

  before(() => {
    cy.step("Visit homepage and check for consent dialogue");
    homePage.visitHomePage();
    cy.checkConsentDialogue();
  });

  it("Validate all categories", () => {
    cy.fixture("categories").then((categories) => {
      cy.step("Navigate to search component");
      const gamesCategories = categories.categories;

      homePage.navigateToSearch();

      cy.step("Verify categories");
      gamesCategories.forEach((category: string) => {
        homePage.searchAndVerifyCategory(category);
      });
    });
  });
});
