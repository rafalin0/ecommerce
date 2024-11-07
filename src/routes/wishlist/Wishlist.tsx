import React from "react";

import { useSelector } from "react-redux";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector.ts";

import WishlistItem from "../../components/wishlist-item/WishlistItem.tsx";

import { Banner, PageTitle, StyledTextLink } from "../../styles/Global";
import {
  EmptyList,
  WishlistContainer,
  WishlistItemsContainer,
} from "./WishlistStyled.tsx";

function Wishlist() {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <WishlistContainer>
      <Banner>
        <PageTitle>My Wishlist</PageTitle>
      </Banner>
      {wishlistItems.length === 0 && (
        <EmptyList>
          <p>You have no items in your wishlist.</p>
          <StyledTextLink to="/catalogue">Continue Browsing</StyledTextLink>
        </EmptyList>
      )}
      {wishlistItems.length > 0 && (
        <WishlistItemsContainer>
          {wishlistItems.map((wishlistItem) => (
            <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />
          ))}
        </WishlistItemsContainer>
      )}
      
    </WishlistContainer>
  );
}

export default Wishlist;
