import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector";
import { addItemToCart } from "../../store/cart/cartAction";
import { updateWishlist } from "../../store/wishlist/wishlistAction";
import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import {
  ProductCardContainer,
  ProductImage,
  Body,
  WishlistIcon,
} from "./ProductCardStyled.jsx";

import Button from "../button/Button";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const wishlistItems = useSelector(selectWishlistItems);

  const { name, imageUrl, price } = product;
  const [isLiked, setIsLiked] = useState("notLiked");

  useEffect(() => {
    const existingWishlistItem = wishlistItems.find(
      (wishlistItem) => wishlistItem.id === product.id
    );
    if (existingWishlistItem) {
      setIsLiked("liked");
    }
  }, [product, wishlistItems]);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  const getStatus = () => {
    dispatch(updateWishlist(wishlistItems, product));
    toggleLike();
  };

  const toggleLike = () => {
    const existingWishlistItem = wishlistItems.find(
      (wishlistItem) => wishlistItem.id === product.id
    );
    if (existingWishlistItem) {
      setIsLiked("notLiked");
    } else {
      setIsLiked("liked");
    }
  };

  return (
    <ProductCardContainer>
      <ProductImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></ProductImage>
      <Body>
        <span className="name">{name}</span>
        <WishlistIcon status={isLiked} onClick={getStatus} />
        <Button buttonType="inverted" onClick={addProductToCart}>
          <span>₱ {price}</span>
          <span>Add to Cart</span>
        </Button>
      </Body>
    </ProductCardContainer>
  );
}

export default ProductCard;
