import React, {useCallback, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/userSelector.ts";
import { selectIsCartOpen, selectCartItems, selectCartCount } from "../../store/cart/cartSelector.ts";
import { selectWishlistItems
} from "../../store/wishlist/wishlistSelector.ts";

import { addItemToCart, setIsCartOpen } from "../../store/cart/cartAction.ts";
import { updateWishlist } from "../../store/wishlist/wishlistAction.ts";
import { signOutStart } from "../../store/user/userAction.ts";

import {
  SignInSuccessContainer,
  CardContainer,
  CountContainer,
  ActionContainer,
  CheckoutIcon,
  OpenCartIcon,
  ShopMoreIcon,
  GoToWishlist,
  } from "./SignInSuccessStyled.tsx";
import { Banner, PageContainer, PageTitle, StyledTextLink } from "../../styles/Global.jsx";
import Button from "../../components/button/Button.tsx";
import { Link } from "react-router-dom";
import { AccentButton, InvertedAccentButton } from "../../components/button/ButtonStyled.tsx";

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

  const signOutUser = () => dispatch(signOutStart());

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

 const moveToCart = useCallback(() => {
    wishlistItems.forEach((wishlistItem) => {
      const { status, ...rest } = wishlistItem;
      const product = rest;
      dispatch(addItemToCart(cartItems, product));
      dispatch(updateWishlist(wishlistItems, wishlistItem));
      setShouldMoveToCart(true);
    });
  }, [wishlistItems, cartItems, dispatch]); 

useEffect(() => {
  if (shouldMoveToCart) {
    moveToCart();
  }
}, [shouldMoveToCart, moveToCart]);


  return (
    <PageContainer>
      <Banner>
        <PageTitle>Hi{ ", " + firstName }!</PageTitle>
      </Banner>
      <SignInSuccessContainer>
        
        {cartCount === 0 && (
          <CardContainer>
            <CountContainer>
              <p>Your cart is empty</p>
              <StyledTextLink to="/#directory">Browse Products</StyledTextLink>
            </CountContainer>
          </CardContainer>
          )}

        {cartCount > 0 && (
          <CardContainer>

            <CountContainer>
              <p>You have <span>{cartCount} {cartCount > 1 ? "items" : "item"}</span> in your cart</p>
            </CountContainer>

            <ActionContainer>
              <Link to="/checkout">
                <AccentButton>                
                  <CheckoutIcon />
                  <p>Go to Checkout</p>               
                </AccentButton>
              </Link>
                
              <AccentButton onClick={toggleIsCartOpen}> 
                <OpenCartIcon />
                <p>Open Cart</p>
              </AccentButton>

              <Link to="/#directory">
                <InvertedAccentButton>
                <ShopMoreIcon />
                  <p>Continue Shopping</p>
                  </InvertedAccentButton>
              </Link>
            </ActionContainer>

          </CardContainer>
        )}

        {wishlistItems.length === 0 && (
          <CardContainer>
            <CountContainer>
              <p>Your wishlist is empty</p>
              <StyledTextLink to="/#directory">Browse Products</StyledTextLink>
            </CountContainer>
          </CardContainer>
        )}

        {wishlistItems.length > 0 && (
          <CardContainer>
            <CountContainer>
              <p>You have <span>{wishlistItems.length} {wishlistItems.length > 1 ? "items" : "item"}</span> in your wishlist</p>
            </CountContainer>
            <ActionContainer>
        
              <AccentButton onClick={confirmMoveToCart}> 
                <ShopMoreIcon />
                <p>Move all to Cart</p>
              </AccentButton>

              <Link to="/wishlist">
                <AccentButton>                
                  <GoToWishlist />
                  <p>Go to Wishlist</p>               
                </AccentButton>
              </Link>
                

              <Link to="/#directory">
                <InvertedAccentButton>
                <ShopMoreIcon />
                  <p>Continue Shopping</p>
                  </InvertedAccentButton>
              </Link>
            </ActionContainer>
          </CardContainer>
        )}
      
        <Button onClick={signOutUser} >Sign Out</Button>
      </SignInSuccessContainer>
      </PageContainer>
  )
}

export default SignInSuccess;
