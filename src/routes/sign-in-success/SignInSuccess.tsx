import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/userSelector.ts";
import { selectIsCartOpen, selectCartItems, selectCartCount } from "../../store/cart/cartSelector.ts";
import { selectWishlistItems
} from "../../store/wishlist/wishlistSelector.ts";

import { addItemToCart, setIsCartOpen } from "../../store/cart/cartAction.ts";
import { updateWishlist } from "../../store/wishlist/wishlistAction.ts";

import {
  SignInSuccessContainer,
  CardContainer,
  Count,
  CountContainer,
  ActionContainer,
  Action,
  CheckoutIcon,
  OpenCartIcon,
  ShopMoreIcon,
  GoToWishlist,
  } from "./SignInSuccessStyled.tsx";
import { Banner, PageTitle } from "../../styles/Global.jsx";

const SignInSuccess = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const currentUser = useSelector(selectCurrentUser);
  const fullName = currentUser?.displayName;
  const firstName = fullName?.split(' ')[0];
  const [shouldMoveToCart, setShouldMoveToCart] = useState(false);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

const confirmMoveToCart = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to move all items to the cart?"
    );

    if (userConfirmed) {
      moveToCart();
    } 
  };  

  const moveToCart = () => {
    wishlistItems.map((wishlistItem) => {
      const { status, ...rest } = wishlistItem;
      const product = rest;
      dispatch(addItemToCart(cartItems, product));
      dispatch(updateWishlist(wishlistItems, wishlistItem));
      setShouldMoveToCart(true);
    });
  }

  useEffect(() => {
    if (shouldMoveToCart) {
      moveToCart();
    }
  }, [wishlistItems.length]);

  
  return (
    <>
      <Banner>
        <PageTitle>Hi{ ", " + firstName }!</PageTitle>
      </Banner>
      <SignInSuccessContainer>
        <CardContainer>
          <CountContainer>
            <p>You have</p>
            <Count>{ cartCount }</Count>
            <p>items in your cart</p>
          </CountContainer>
          <ActionContainer>
              <Action to="/checkout"><CheckoutIcon/><p>Go to Checkout</p></Action>
              <Action as="div" onClick={toggleIsCartOpen}><OpenCartIcon/><p>Open Cart</p></Action>
              <Action to="/#directory"><ShopMoreIcon/><p>Continue Shopping</p></Action>
          </ActionContainer>
        </CardContainer>
      
      <CardContainer>
          <CountContainer>
            <p>You have</p>
            <Count>{ wishlistItems.length }</Count>
            <p>items in your wishlist</p>
          </CountContainer>
          <ActionContainer>
            <Action as="div" onClick={confirmMoveToCart}><ShopMoreIcon/><p>Move all to Cart</p></Action>
              <Action to="/wishlist" ><GoToWishlist/><p>Go to Wishlist</p></Action>
              <Action to="/#directory"><ShopMoreIcon/><p>Continue Shopping</p></Action>
          </ActionContainer>
        </CardContainer>
      </SignInSuccessContainer>
      </>
  )
}

export default SignInSuccess;
