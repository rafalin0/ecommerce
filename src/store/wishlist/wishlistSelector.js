import { createSelector } from "reselect";

const selectWishlistReducer = (state) => state.wishlist;

export const selectWishlistItems = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.wishlistItems
);
