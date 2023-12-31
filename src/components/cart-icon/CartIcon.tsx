import React from "react";

import { useSelector } from "react-redux";

import { selectCartCount } from "../../store/cart/cartSelector.ts";

import {
  CartIconContainer,
  ShoppingIcon,
  CartCount,
} from "./CartIconStyled.tsx";

function CartIcon() {
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
}

export default CartIcon;
