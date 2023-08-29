import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./shopping-cart.scss";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

// import { AiFillCloseCircle } from "react-icons/ai";
import { CgClose as CloseIcon } from "react-icons/cg";

function ShoppingCart() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-modal-container">
      <div className="header">
        <h3>cart</h3>
        <p>5 items</p>
        <CloseIcon className="close-icon" onClick={toggleIsCartOpen} />
      </div>
      <div className="cart-items">
        <CartItem />
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
