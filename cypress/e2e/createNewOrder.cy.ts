import { HomePage } from "../pages/homePage";
import { ShopPage } from "../pages/shopPage";
import { BasketPage } from "../pages/basketPage";
import { CheckoutPage, BillingData } from "../pages/checkoutPage";
import { OrderDetailsPage } from "../pages/orderDetailsPage";

describe("New order", () => {
  const homePage = new HomePage();
  const shopPage = new ShopPage();
  const basketPage = new BasketPage();
  const checkoutPage = new CheckoutPage();
  const orderDetailsPage = new OrderDetailsPage();

  beforeEach(() => {
    cy.step("Visit homepage");
    homePage.visitHomePage();
  });

  it("Create new order (view basket via page) ", () => {
    cy.step("Navigate to shop page");
    homePage.navigateToShop().click();
    shopPage.orderBy().should("be.visible");

    cy.step("Sort items by lowest price");
    shopPage.orderByLowestPrice();
    shopPage.orderBy().should("have.value", "price");

    cy.step("Add item to basket");
    shopPage.addProductToCartById("180").click();
    shopPage.viewBasketPageLink().should("be.visible");

    cy.step("Navigate to basket via 'view basket' link on shop page");
    shopPage.viewBasketPageLink().click();
    basketPage.proceedToCheckoutButton().should("be.visible");

    cy.step("Proceed to checkout and place order");
    basketPage.proceedToCheckoutButton().click();
    checkoutPage.customerDetails().should("be.visible");
    cy.fixture("billingDetails").then((billingData: BillingData) => {
      checkoutPage.fillBillingDetails(billingData);
    });
    checkoutPage.paymentMethodCash().click();
    checkoutPage.placeOrder().click();
    orderDetailsPage.orderDetails().should("be.visible");

    cy.step("Confirm order info");
    cy.fixture("orderDetails").then((orderDetails) => {
      orderDetailsPage
        .productName()
        .should("contain", orderDetails.productName);
      orderDetailsPage.totalPrice().should("contain", orderDetails.totalPrice);
    });
  });

  it("Creates new order (view basket via nav bar) ", () => {
    cy.step("Navigate to shop page");
    homePage.navigateToShop().click();
    shopPage.orderBy().should("be.visible");

    cy.step("Sort items by lowest price");
    shopPage.orderByLowestPrice();
    shopPage.orderBy().should("have.value", "price");

    cy.step("Add item to basket");
    shopPage.addProductToCartById("180").click();
    shopPage.viewBasketPageLink().should("be.visible");

    cy.step("Navigate to basket via 'view basket' link on shop page");
    shopPage.viewBasketNavBar().click();
    basketPage.proceedToCheckoutButton().should("be.visible");

    cy.step("Proceed to checkout and place order");
    basketPage.proceedToCheckoutButton().click();
    checkoutPage.customerDetails().should("be.visible");
    cy.fixture("billingDetails").then((billingData: BillingData) => {
      checkoutPage.fillBillingDetails(billingData);
    });
    checkoutPage.paymentMethodCash().click();
    checkoutPage.placeOrder().click();
    orderDetailsPage.orderDetails().should("be.visible");

    cy.step("Confirm order info");
    cy.fixture("orderDetails").then((orderDetails) => {
      orderDetailsPage
        .productName()
        .should("contain", orderDetails.productName);
      orderDetailsPage.totalPrice().should("contain", orderDetails.totalPrice);
    });
  });
});
