export interface BillingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export class CheckoutPage {
  fillBillingDetails(billingData: BillingData) {
    cy.get('[id="billing_first_name"]').clear().type(billingData.firstName);
    cy.get("#billing_last_name").clear().type(billingData.lastName);
    cy.get("#billing_email").clear().type(billingData.email);
    cy.get("#billing_phone").clear().type(billingData.phone);
    cy.get(".select2-choice").eq(0).click();
    cy.get("#s2id_autogen1_search").type(`${billingData.country}{enter}`);
    cy.get("#billing_address_1").clear().type(billingData.address);
    cy.get("#billing_city_field").clear().type(billingData.city);
    cy.get(".select2-choice").eq(1).click();
    cy.get("#s2id_autogen2_search").type(`${billingData.state}{enter}`);
    cy.get("#billing_postcode_field").clear().type(billingData.zipCode);
  }

  customerDetails() {
    return cy.get('[id="customer_details"]');
  }

  paymentMethodCash() {
    return cy.get('[id="payment_method_cod"]');
  }

  placeOrder() {
    return cy.get('[id="place_order"]');
  }
}
