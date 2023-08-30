import { useContext } from "react";
import { CgClose as CloseIcon } from "react-icons/cg";

import { CartContext } from "../../contexts/CartContext";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import "./shopping-cart.scss";

function ShoppingCart() {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount, cartTotal } =
    useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-modal-container">
      <div className="header">
        <h3>cart</h3>
        <p>{cartCount} items</p>
        <CloseIcon className="close-icon" onClick={toggleIsCartOpen} />
      </div>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <p className="empty-cart">Your shopping bag is empty.</p>
        )}
      </div>

      <div className="footer">
        <div className="total">
          <h3>Total</h3>
          <h3>₱ {cartTotal}</h3>
        </div>
        <p>shipping & discounts calculated at checkout</p>
        <Button>PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
}
export default ShoppingCart;
