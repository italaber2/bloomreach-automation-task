import { HomePage } from "../pages/homePage";
import { ShopPage } from "../pages/shopPage";

interface GemPrice {
  quantity: string;
  price: string;
}

describe("Validate gem prices", () => {
  const homePage = new HomePage();
  const shopPage = new ShopPage();

  before(() => {
    cy.step("Visit homepage and check for consent dialogue");
    homePage.visitHomePage();
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
      homePage.verifyAvatar();

      cy.step("Navigate to the shop");
      homePage.navigateToShop();

      cy.step("Validate the number of gems and price");
      shopPage.validateGemPrices(gemPrices);
    });
  });
});
