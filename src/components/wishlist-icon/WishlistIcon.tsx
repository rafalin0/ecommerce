import React from "react";

import { useSelector } from "react-redux";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector.ts";

import {
  WishlistIconContainer,
  Wishlist,
  WishlistCount,
} from "./WishlistIconStyled.tsx";

function WishlistIcon() {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <WishlistIconContainer>
      <Wishlist />
      <WishlistCount>{wishlistItems.length}</WishlistCount>
    </WishlistIconContainer>
  );
}

export default WishlistIcon;
