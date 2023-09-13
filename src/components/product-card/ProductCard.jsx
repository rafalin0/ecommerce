import { useContext, useState, useEffect } from "react";

import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import {
  ProductCardContainer,
  ProductImage,
  Body,
  WishlistIcon,
} from "./ProductCardStyled.jsx";

import Button from "../button/Button";

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const [isLiked, setIsLiked] = useState("notLiked");
  const { addItemToCart } = useContext(CartContext);
  const { updateWishlist, wishlistItems } = useContext(WishlistContext);

  useEffect(() => {
    const existingWishlistItem = wishlistItems.find(
      (wishlistItem) => wishlistItem.id === product.id
    );
    if (existingWishlistItem) {
      setIsLiked("liked");
    }
  }, [product, wishlistItems]);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  const getStatus = () => {
    updateWishlist(product);
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
