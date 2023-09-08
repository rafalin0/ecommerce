import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
  CartItemContainer,
  CartItemDesc,
  QuantitySelector,
  RemoveIcon,
} from "./CartItemStyled.jsx";

function CartItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  const total = quantity * price;

  const { addItemToCart, removeItemFromCart, clearCartItemFromCart } =
    useContext(CartContext);

  return (
    <CartItemContainer>
      <img className="product-image" src={imageUrl} alt={`${name}`} />
      <CartItemDesc>
        <h5 className="name">{name}</h5>
        <p className="price">₱ {price}</p>
      </CartItemDesc>
      <QuantitySelector>
        {quantity > 1 ? (
          <button
            type="button"
            className="decrement-quantity"
            ariaLabel="Subtract one"
            onClick={() => removeItemFromCart(cartItem)}
          >
            <span>&#8722;</span>
          </button>
        ) : (
          <button className="decrement-quantity" type="button" disabled>
            <span>&#8722;</span>
          </button>
        )}
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
          data-direction="1"
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          <span>&#43;</span>
        </button>
      </QuantitySelector>
      <h4 className="total">₱ {total}</h4>
      <RemoveIcon
        onClick={() => clearCartItemFromCart(cartItem)}
        className="remove-icon"
      />
    </CartItemContainer>
  );
}
export default CartItem;
