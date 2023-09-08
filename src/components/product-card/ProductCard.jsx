import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
  ProductCardContainer,
  ProductImage,
  Body,
  WishlistIcon,
} from "./ProductCardStyled.jsx";

import Button from "../button/Button";

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
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
        <WishlistIcon />
        <span className="price">₱ {price}</span>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </Body>
    </ProductCardContainer>
  );
}

export default ProductCard;
