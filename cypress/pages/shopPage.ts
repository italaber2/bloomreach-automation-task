export class ShopPage {
  orderBy() {
    return cy.get('[name="orderby"]');
  }

  orderByLowestPrice() {
    return cy.get('[name="orderby"]').select("price").wait(500);
  }

  addProductToCartById(id: string) {
    return cy.get(`[data-product_id='${id}']`);
  }

  viewBasketPageLink() {
    return cy.get('a[title="View Basket"]');
  }

  viewBasketNavBar() {
    return cy.get('[id="wpmenucartli"]');
  }
}
