import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cartAction.ts";
import { selectCartItems } from "../../store/cart/cartSelector.ts";
import { updateWishlist } from "../../store/wishlist/wishlistAction.js";
import { selectWishlistItems } from "../../store/wishlist/wishlistSelector.js";

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const {
    wishlistItem: { name, imageUrl, price },
  } = props;
  const wishlistItems = useSelector(selectWishlistItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, props.wishlistItem));
    dispatch(updateWishlist(wishlistItems, props.wishlistItem));
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
        <RemoveButton
          onClick={() =>
            dispatch(updateWishlist(wishlistItems, props.wishlistItem))
          }
        >
          <RemoveFromWishlist />
        </RemoveButton>
      </BtnContainer>
    </WishlistItemContainer>
  );
}

export default WishlistItem;
