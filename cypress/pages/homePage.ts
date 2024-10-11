// cypress/pages/homePage.ts
export class HomePage {
  visitHomePage() {
    cy.visit("https://www.arkadium.com/");
    cy.url().should("eq", "https://www.arkadium.com/");
  }

  navigateToBestGames() {
    cy.get('[data-testid="Best"]').click();
  }

  navigateToSeasonalGames() {
    cy.get('[data-testid="Seasonal Games"]').click();
  }

  navigateToSearch() {
    cy.get('[data-element-description="nav-search-button"]').click();
  }

  navigateToShop() {
    cy.get('[data-element-description="nav-shop-button"]').click();
  }

  searchAndVerifyCategory(category: string) {
    cy.get('[data-element-description="search-games"]').clear().type(category);

    cy.get(".CategoryCard-categoryCardCaption-RBYCfGRI")
      .contains(category)
      .should("be.visible");
  }

  verifyAvatar() {
    cy.get('[data-testid="avatars-list-item"]', { timeout: 10000 }).should(
      "be.visible"
    );
  }
}
