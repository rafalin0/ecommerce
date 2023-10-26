import { CategoryItem } from "../categories/categoryTypes";

export enum WISHLIST_ACTION_TYPES
{
  SET_WISHLIST_ITEMS= "wishlist/SET_WISHLIST_ITEMS",
};

export type WishlistItem = CategoryItem & {
  status?: string;
};
