import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cartAction.ts";
import { selectCartItems } from "../../store/cart/cartSelector.ts";
import { updateWishlist } from "../../store/wishlist/wishlistAction.ts";
import { selectWishlistItems } from "../../store/wishlist/wishlistSelector.ts";

import {
  ItemDescription,
  ItemPhoto,
  WishlistItemContainer,
  BtnContainer,
  RemoveFromWishlist,
  MoveToBag,
  BagButton,
  RemoveButton,
} from "./WishlistItemStyled.tsx";

type WishlistItemProps = {
  wishlistItem: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }
}

const WishlistItem: React.FC<WishlistItemProps> = ({ wishlistItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const  { name, imageUrl, price } = wishlistItem;
  const wishlistItems = useSelector(selectWishlistItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, wishlistItem));
    dispatch(updateWishlist(wishlistItems, wishlistItem));
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
        <BagButton onClick={addProductToCart}>
          <MoveToBag />
        </BagButton>
        <RemoveButton
          onClick={() =>
            dispatch(updateWishlist(wishlistItems, wishlistItem))
          }
        >
          <RemoveFromWishlist />
        </RemoveButton>
      </BtnContainer>
    </WishlistItemContainer>
  );
}

export default WishlistItem;
