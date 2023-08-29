import "./cart-item.scss";

import { RiDeleteBin5Line as RemoveIcon } from "react-icons/ri";

function CartItem({ cartItem }) {
  const { name, price, quantity, imageURL } = cartItem;
  const total = quantity * price;

  return (
    <div className="cart-item-container">
      <img className="product-image" src={imageURL} alt={`${name}`} />
      <div className="product-desc">
        <h5 className="name">{name}</h5>
        <p className="price">₱ {price}</p>
      </div>
      <div className="quantity-selector">
        <button
          type="button"
          className="decrement-quantity"
          data-direction="-1"
          ariaLabel="Subtract one"
          disabled="true"
        >
          <span>&#8722;</span>
        </button>
        <input
          className="quantity"
          data-min="1"
          type="text"
          name="quantity"
          value={quantity}
        />
        <button
          type="button"
          className="increment-quantity"
          ariaLabel="Add one"
          data-direction="1"
        >
          <span>&#43;</span>
        </button>
      </div>
      <h4 className="total">₱ {total}</h4>
      <RemoveIcon className="remove-icon" />
    </div>
  );
}
export default CartItem;
