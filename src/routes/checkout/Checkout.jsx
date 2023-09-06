import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.scss";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-main">
        <div className="checkout-items">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="total">
          <h3>Total</h3>
          <h3>₱ {cartTotal}</h3>
        </div>
      </div>

      <div className="checkout-sidebar">
        <h2>Order Summary</h2>
        <div className="checkout-items">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="cart-total-container">
          <p className="label">Total</p>
          <p className="cart-total">₱ {cartTotal}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
