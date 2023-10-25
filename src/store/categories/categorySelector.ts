import { createSelector } from "reselect";

import { RootState } from "../store";

import { CategoryState } from "./categoryReducer";
import { CategoryMap } from "./categoryTypes";

const selectCategoryReducer = (state: RootState): CategoryState => state.categories;

// returns a memoized selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
