export class OrderDetailsPage {
  orderDetails() {
    return cy.get('[id="page-35"]');
  }

  productName() {
    return cy.get(".product-name").eq(1);
  }

  totalPrice() {
    return cy.get(".woocommerce-Price-amount").eq(3);
  }
}
