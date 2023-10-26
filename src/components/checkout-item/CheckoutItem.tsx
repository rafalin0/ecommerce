import React from "react";

import
  {
  CheckoutItemContainer,
  ItemName,
  ItemTotalPrice,
} from "./CheckoutItemStyled.tsx";
import ItemIcon from "./ItemIcon.tsx";

import { CartItem } from "../../store/cart/cartTypes.ts";

type CheckoutItemProps = {
  cartItem: CartItem
}

const CheckoutItem: React.FC<CheckoutItemProps>=({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const total = quantity * price;
  return (
    <CheckoutItemContainer>
      <ItemIcon src={imageUrl} alt={`${name}`} quantity={quantity} />
      <ItemName className="name">{name}</ItemName>
      <ItemTotalPrice>₱ {total}</ItemTotalPrice>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
