export class HomePage {
  visitHomePage() {
    cy.visit("/");
    cy.url().should("eq", "https://practice.automationtesting.in/");
  }

  navigateToShop() {
    return cy.get('[id="menu-item-40"]');
  }
}
