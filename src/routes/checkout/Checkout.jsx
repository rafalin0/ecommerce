import { useSelector } from "react-redux";

import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cartSelector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutContainer,
  Main,
  OrderSummary,
  CheckoutItems,
  Total,
} from "./CheckoutStyled.jsx";

function Checkout() {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutContainer>
      <Main>
        <CheckoutItems>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </CheckoutItems>
        <Total>
          <h3>Total</h3>
          <h3>₱ {cartTotal}</h3>
        </Total>
      </Main>

      <OrderSummary>
        <h2>Order Summary</h2>
        <CheckoutItems>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </CheckoutItems>
        <Total>
          <p>Total</p>
          <p>₱ {cartTotal}</p>
        </Total>
      </OrderSummary>
    </CheckoutContainer>
  );
}

export default Checkout;
