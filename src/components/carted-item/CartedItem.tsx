import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearCartItemFromCart,
} from "../../store/cart/cartAction.ts";
import { selectCartItems } from "../../store/cart/cartSelector.ts";
import { CartItem } from "../../store/cart/cartTypes.ts";

import {
  CartItemContainer,
  CartItemDesc,
  QuantitySelector,
  RemoveIcon,
} from "./CartedItemStyled.tsx";

type CartItemProps = {
  cartItem: CartItem;
};

const CartedItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = cartItem;
  const total = quantity * price;

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
            onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
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
            dispatch(addItemToCart(cartItems, cartItem));
          }}
        >
          <span>&#43;</span>
        </button>
      </QuantitySelector>
      <h4 className="total">₱ {total}</h4>
      <RemoveIcon
        onClick={() => dispatch(clearCartItemFromCart(cartItems, cartItem))}
        className="remove-icon"
      />
    </CartItemContainer>
  );
}
export default CartedItem;