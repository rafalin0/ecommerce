import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./product-card.scss";

import Button from "../button/Button";

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
