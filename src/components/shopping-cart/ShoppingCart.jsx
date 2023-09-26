import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import {
  ShoppingCartContainer,
  CloseIcon,
  ShoppingCartHeader,
  EmptyMessage,
  ShoppingCartFooter,
  ShoppingCartItems,
} from "./ShoppingCartStyled.jsx";

function ShoppingCart() {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount, cartTotal } =
    useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    toggleIsCartOpen();
  };

  return (
    <ShoppingCartContainer>
      <ShoppingCartHeader>
        <h3>cart</h3>
        <p>{cartCount} items</p>
        <CloseIcon className="close-icon" onClick={toggleIsCartOpen} />
      </ShoppingCartHeader>
      <ShoppingCartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your shopping bag is empty.</EmptyMessage>
        )}
      </ShoppingCartItems>

      <ShoppingCartFooter>
        <h3>Total</h3>
        <h3>₱ {cartTotal}</h3>

        <p>shipping & discounts calculated at checkout</p>
        <Button type="button" onClick={goToCheckoutHandler}>
          PROCEED TO CHECKOUT
        </Button>
      </ShoppingCartFooter>
    </ShoppingCartContainer>
  );
}
export default ShoppingCart;
