import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal,
} from "../../store/cart/cartSelector.ts";
import { setIsCartOpen } from "../../store/cart/cartAction.ts";

import Button from "../button/Button.tsx";
import CartedItems from "../carted-items/CartedItems.tsx";

import {
  ShoppingCartContainer,
  CloseIcon,
  ShoppingCartHeader,
  ShoppingCartFooter,
} from "./ShoppingCartStyled.tsx";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <ShoppingCartContainer>
      <ShoppingCartHeader>
        <h3>cart</h3>
        <p>{cartCount} items</p>
        <CloseIcon className="close-icon" onClick={toggleIsCartOpen} />
      </ShoppingCartHeader>
     
      <CartedItems />
      
      <ShoppingCartFooter>
        <h3>Total</h3>
        <h3>₱ {cartTotal}</h3>

        <p>shipping & discounts calculated at checkout</p>
        <Button type="button" onClick={goToCheckoutHandler}>
          PROCEED TO CHECKOUT
        </Button>
      </ShoppingCartFooter>
    </ShoppingCartContainer>
  );
}
export default ShoppingCart;
