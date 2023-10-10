import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoryReducer";
import { cartReducer } from "./cart/cartReducer";
import { wishlistReducer } from "./wishlist/wishlistReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
