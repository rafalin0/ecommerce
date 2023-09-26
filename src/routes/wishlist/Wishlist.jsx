import React, { useContext } from "react";

import { WishlistContext } from "../../contexts/WishlistContext";

import WishlistItem from "../../components/wishlist-item/WishlistItem";

import { Banner, PageTitle } from "../../styles/Global";
import { WishlistContainer, WishlistItemsContainer } from "./WishlistStyled";

function Wishlist() {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <WishlistContainer>
      <Banner>
        <PageTitle>My Wishlist</PageTitle>
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
