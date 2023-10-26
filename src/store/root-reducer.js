import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer.ts";
import { categoriesReducer } from "./categories/categoryReducer.ts";
import { cartReducer } from "./cart/cartReducer.ts";
import { wishlistReducer } from "./wishlist/wishlistReducer.ts";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
