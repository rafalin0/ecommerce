import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.ts";

import { CART_ACTION_TYPES, CartItem } from "./cartTypes.ts";
import { CategoryItem } from "../categories/categoryTypes";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems or with a new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const editCartItemQuantity = (cartItems: CartItem[], productToEdit: CategoryItem, qty: number): CartItem[] => {
  if (qty < 1) qty = 1
  if (qty > 50) qty = 50
  // return back cart items with matching cart item with updated quantity
  return cartItems.map((cartItem) => 
    cartItem.id === productToEdit.id
      ? { ...cartItem, quantity: qty }
      : cartItem
  );
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  // return back cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  // clear the cart of the found item
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));


export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const editItemQuantity = (cartItems: CartItem[], productToEdit: CategoryItem, qty: number): SetCartItems => {
  const newCartItems = editCartItemQuantity(cartItems, productToEdit, qty);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
 return setCartItems(newCartItems);
};

export const clearCartItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem): SetCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
