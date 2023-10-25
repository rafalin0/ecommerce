import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cartSelector.ts";
import { selectCurrentUser } from "../../store/user/userSelector.ts";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import { PaymentFormContainer } from "./PaymentFormStyled";

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    console.log("response", clientSecret);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
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
