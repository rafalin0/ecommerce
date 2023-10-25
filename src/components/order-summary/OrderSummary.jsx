import { useState } from "react";
import { useSelector } from "react-redux";

import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cartSelector.ts";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  SummaryContainer,
  SidebarTitle,
  CheckoutItems,
  Total,
  ShowIcon,
  HideIcon,
} from "./OrderSummaryStyled";

const OrderSummary = () => {
  const [isClicked, setIsClicked] = useState(false);
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  return (
    <SummaryContainer
      visibility={isClicked}
      onClick={() => setIsClicked(!isClicked)}
    >
      <SidebarTitle>
        Order Summary {isClicked ? <HideIcon /> : <ShowIcon />}
      </SidebarTitle>
      <CheckoutItems visibility={isClicked}>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutItems>
      <Total visibility={isClicked}>
        <p>Total</p>
        <p>₱ {cartTotal}</p>
      </Total>
    </SummaryContainer>
  );
};

export default OrderSummary;
