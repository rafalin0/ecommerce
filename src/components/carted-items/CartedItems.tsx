import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector.ts";

import CartedItem from "../carted-item/CartedItem.tsx"

import { ShoppingCartItems, EmptyMessage } from "./CartedItemsStyled.tsx"

const CartedItems = () => {
  const ref = useRef<any>(null);
  const cartItems = useSelector(selectCartItems);
  const [prevLength, setPrevLength] = useState(cartItems.length);

  const scrollToNewItem = () => {  
    const lastChildElement = ref.current?.lastElementChild;;
    lastChildElement?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() =>{
    if (cartItems.length > prevLength) {
      scrollToNewItem();
    }
    setPrevLength(cartItems.length);
  }, [cartItems]);


  return (
    <ShoppingCartItems ref={ref} >
      {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartedItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your shopping bag is empty.</EmptyMessage>
        )
      }
    </ShoppingCartItems>
  );
}

export default CartedItems;
