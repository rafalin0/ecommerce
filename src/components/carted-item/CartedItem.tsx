import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearCartItemFromCart,
  editItemQuantity,
} from "../../store/cart/cartAction.ts";
import { selectCartItems } from "../../store/cart/cartSelector.ts";
import { CartItem } from "../../store/cart/cartTypes.ts";

import {
  CartItemContainer,
  CartItemDesc,
  QuantitySelector,
  RemoveIcon,
} from "./CartedItemStyled.tsx";

type CartedItemProps = {
  cartItem: CartItem;
};

const CartedItem: React.FC<CartedItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = cartItem;

  const [qty, setQty] = useState(quantity);

  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setQty(Number(numericValue));
  };

  const updateQuantity = () => {
    dispatch(editItemQuantity(cartItems, cartItem, qty));
  };

  return (
    <CartItemContainer>
      <img className="product-image" src={imageUrl} alt={`${name}`} />
      <CartItemDesc>
        <h5 className="name">{name}</h5>
        <p className="price">₱ {price}</p>
      </CartItemDesc>
      <QuantitySelector>
        <button
          type="button"
          className="decrement-quantity"
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
          disabled={quantity <= 1}
        >
          <span>&#8722;</span>
        </button>
        <input
          onChange={handleInputChange}
          className="quantity"
          data-min="1"
          type="text"
          inputMode="numeric"
          name="quantity"
          value={qty}
          onBlur={updateQuantity}
        />
        <button
          type="button"
          className="increment-quantity"
          data-direction="1"
          onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
        >
          <span>&#43;</span>
        </button>
      </QuantitySelector>
      <h4 className="total">₱ {quantity * price}</h4>
      <RemoveIcon
        onClick={() => dispatch(clearCartItemFromCart(cartItems, cartItem))}
        className="remove-icon"
      />
    </CartItemContainer>
  );
};

export default CartedItem;
