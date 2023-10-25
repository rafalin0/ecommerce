import PaymentForm from "../../components/payment-form/PaymentForm";
import OrderSummary from "../../components/order-summary/OrderSummary.jsx";

import { CheckoutContainer, Main, Sidebar } from "./CheckoutStyled.jsx";

function Checkout() {
  return (
    <CheckoutContainer>
      <Main>
        <PaymentForm />
      </Main>

      <Sidebar>
        <OrderSummary />
      </Sidebar>
    </CheckoutContainer>
  );
}

export default Checkout;
