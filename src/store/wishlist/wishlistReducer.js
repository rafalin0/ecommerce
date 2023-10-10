import { WISHLIST_ACTION_TYPES } from "./wishlistTypes";

export const WISHLIST_INITIAL_STATE = {
  wishlistItems: [],
};

export const wishlistReducer = (
  state = WISHLIST_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS:
      return { ...state, wishlistItems: payload };
    default:
      return state;
  }
};
