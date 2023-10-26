import { AnyAction } from "redux";

import {setWishlistItems} from "./wishlistAction.ts"

import { CategoryItem } from "../categories/categoryTypes";

export type WishlistState = {
 readonly  wishlistItems: CategoryItem[];
}

export const WISHLIST_INITIAL_STATE = {
  wishlistItems: [],
};

export const wishlistReducer = (
  state = WISHLIST_INITIAL_STATE,
  action: AnyAction
): WishlistState => {
  if (setWishlistItems.match(action)) {
    return { ...state, wishlistItems: action.payload };
  }
  return state;
};
