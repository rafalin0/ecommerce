import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.ts";
import { CategoryItem } from "../categories/categoryTypes.ts";

import { WISHLIST_ACTION_TYPES, WishlistItem } from "./wishlistTypes.ts";

const addOrRemoveWishlistItem = (wishlistItems: WishlistItem[], product:CategoryItem): WishlistItem[] => {
  // find if wishlist array contains the product
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );

  // if found, update the product status and remove from array
  if (existingWishlistItem) {
    return wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== product.id
    );
  }

  // return new array with updated product status
  return [...wishlistItems, { ...product, status: "liked" }];
};

export type SetWishlistItems = ActionWithPayload<WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS,
  WishlistItem[]>;

export const setWishlistItems = withMatcher((wishlistItems: WishlistItem[]): SetWishlistItems => createAction(WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS, wishlistItems));


export const updateWishlist = (wishlistItems: WishlistItem[], product: CategoryItem): SetWishlistItems => {
  const newWishlistItems = addOrRemoveWishlistItem(wishlistItems, product);
  return setWishlistItems(newWishlistItems);
};
