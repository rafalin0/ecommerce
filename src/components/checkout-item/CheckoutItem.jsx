import "./checkout-item.scss";

function CheckoutItem({ cartItem }) {
  const { name, price, quantity, imageURL } = cartItem;
  const total = quantity * price;
  return (
    <div className="checkout-item-container">
      <div className="product-desc">
        <img className="product-image" src={imageURL} alt={`${name}`} />
        <span className="product-quantity">{quantity}</span>
        <p className="name">{name}</p>
      </div>
      <div className="total">
        <p>₱ {total}</p>
      </div>
    </div>
  );
}

export default CheckoutItem;
