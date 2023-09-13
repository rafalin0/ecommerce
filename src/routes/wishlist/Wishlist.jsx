import React, { useContext } from "react";

import { WishlistContext } from "../../contexts/WishlistContext";

import WishlistItem from "../../components/wishlist-item/WishlistItem";

import {
  WishlistContainer,
  WishlistItemsContainer,
  Banner,
} from "./WishlistStyled";

function Wishlist() {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <WishlistContainer>
      <Banner>
        <h1>My Wishlist</h1>
      </Banner>

      <WishlistItemsContainer>
        {wishlistItems.map((wishlistItem) => (
          <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />
        ))}
      </WishlistItemsContainer>
    </WishlistContainer>
  );
}

export default Wishlist;
