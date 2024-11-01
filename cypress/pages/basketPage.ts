export class BasketPage {
  proceedToCheckoutButton() {
    return cy.contains("a", "Proceed to Checkout");
  }
}
