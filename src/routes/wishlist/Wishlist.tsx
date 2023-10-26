import { useSelector } from "react-redux";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector.ts";

import WishlistItem from "../../components/wishlist-item/WishlistItem.tsx";

import { Banner, PageTitle } from "../../styles/Global";
import {
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

      <WishlistItemsContainer>
        {wishlistItems.map((wishlistItem) => (
          <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />
        ))}
      </WishlistItemsContainer>
    </WishlistContainer>
  );
}

export default Wishlist;
