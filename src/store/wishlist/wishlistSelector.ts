import { createSelector } from "reselect";

import { RootState } from "../store";

import { WishlistState } from "./wishlistReducer";

const selectWishlistReducer = (state: RootState): WishlistState => state.wishlist;

export const selectWishlistItems = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.wishlistItems
);
