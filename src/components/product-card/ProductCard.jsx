import "./product-card.scss";

import Button from "../button/Button";

function ProductCard({ product }) {
  const { name, imageURL, price } = product;
  return (
    <div className="product-card-container">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      ></div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted">Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
