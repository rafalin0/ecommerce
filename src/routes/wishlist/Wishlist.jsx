import { useSelector } from "react-redux";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import WishlistItem from "../../components/wishlist-item/WishlistItem";

import { Banner, PageTitle } from "../../styles/Global";
import { WishlistContainer, WishlistItemsContainer } from "./WishlistStyled";

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
