import { createAction } from "../../utils/reducer/reducer.ts";

import { WISHLIST_ACTION_TYPES } from "./wishlistTypes";

const addOrRemoveWishlistItem = (wishlistItems, product) => {
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

export const updateWishlist = (wishlistItems, product) => {
  const newWishlistItems = addOrRemoveWishlistItem(wishlistItems, product);
  return createAction(
    WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS,
    newWishlistItems
  );
};
