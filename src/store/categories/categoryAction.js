import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMap);
