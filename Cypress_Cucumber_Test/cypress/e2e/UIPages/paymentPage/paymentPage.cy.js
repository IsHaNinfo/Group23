import pageElementLocators from "../PageElements/PageElements.json"
import urls from "../../../support/urls.js";


class PaymentInfoPage {
    navigatePaymentInformationPage() {
        cy.url().should("include", urls.paymentInfo);
        return this;
      }
}


const paymentinfo = new PaymentInfoPage();
export default paymentinfo;