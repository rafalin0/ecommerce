import React from "react";

import PaymentForm from "../../components/payment-form/PaymentForm.tsx";
import OrderSummary from "../../components/order-summary/OrderSummary.tsx";

import { CheckoutContainer, Main, Sidebar } from "./CheckoutStyled.tsx";

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
