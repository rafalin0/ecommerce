import React, { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";

import { selectCartTotal } from "../../store/cart/cartSelector.ts";
import { selectCurrentUser } from "../../store/user/userSelector.ts";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.tsx";

import { PaymentFormContainer } from "./PaymentFormStyled.tsx";

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    setIsProcessingPayment(true);

    const response =  await fetch(`${API_URL}/create-payment-intent`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    // type guard check
const cartDetails = elements.getElement(CardElement);
    if (!ifValidCardElement(cartDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cartDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentFormContainer onSubmit={handleSubmit}>
      <h2>Credit Card Payment: </h2>
      <CardElement />
      <Button
        isLoading={isProcessingPayment}
        type="submit"
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        Pay Now
      </Button>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
