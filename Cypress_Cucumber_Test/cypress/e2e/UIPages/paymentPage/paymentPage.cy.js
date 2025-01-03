import pageElementLocators from "../PageElements/PageElements.json";
import urls from "../../../support/urls.js";

class PaymentInfoPage {
  navigatePaymentInformationPage() {
    cy.url().should("include", urls.paymentInfo);
    return this;
  }

  clickFinishButton() {
    cy.get(pageElementLocators.paymentPage.finishButton).click();
    return this;
  }

  verifyCheckoutCompletePage() {
    cy.url().should("include", urls.checkoutComplete);
    return this;
  }

  clickBackHomeButton() {
    cy.get(pageElementLocators.checkoutCompletePage.backHomeButton).click();
    return this;
  }
}

const paymentinfo = new PaymentInfoPage();
export default paymentinfo;
