import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import {
  ItemDescription,
  ItemPhoto,
  WishlistItemContainer,
  BtnContainer,
  RemoveFromWishlist,
  MoveToBag,
  BagButton,
  RemoveButton,
} from "./WishlistItemStyled";

function WishlistItem(props) {
  const {
    wishlistItem: { name, imageUrl, price },
  } = props;
  const { updateWishlist } = useContext(WishlistContext);
  console.log("wish", props.wishlistItem);

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(props.wishlistItem);
    updateWishlist(props.wishlistItem);
  };

  return (
    <WishlistItemContainer>
      <ItemPhoto
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ItemDescription>
        <h2 className="name">{name}</h2>
        <span>₱ {price}</span>
      </ItemDescription>
      <BtnContainer>
        <BagButton buttonType="outline" onClick={addProductToCart}>
          <MoveToBag />
        </BagButton>
        <RemoveButton onClick={() => updateWishlist(props.wishlistItem)}>
          <RemoveFromWishlist />
        </RemoveButton>
      </BtnContainer>
    </WishlistItemContainer>
  );
}

export default WishlistItem;
