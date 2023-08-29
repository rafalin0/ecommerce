import { useContext } from "react";
import { CgClose as CloseIcon } from "react-icons/cg";

import { CartContext } from "../../contexts/CartContext";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import "./shopping-cart.scss";

function ShoppingCart() {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
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
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="footer">
        <div className="total">
          <h3>Total</h3>
          <h3>₱ XXXX</h3>
        </div>
        <p>shipping & discounts calculated at checkout</p>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}
export default ShoppingCart;
