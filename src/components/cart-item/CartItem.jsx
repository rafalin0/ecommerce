import "./cart-item.scss";

import { RiDeleteBin5Line as RemoveIcon } from "react-icons/ri";
function CartItem() {
  return (
    <div className="cart-item-container">
      <div className="product-image"></div>
      <div className="product-desc">
        <h5 className="name">Product Name</h5>
        <p className="price">₱ 500</p>
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
          data-min="1"
          data-max="0"
          type="text"
          name="quantity"
          value="1"
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
      <h4 className="total">₱ 9999</h4>
      <RemoveIcon className="remove-icon" />
    </div>
  );
}
export default CartItem;
