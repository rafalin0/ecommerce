import { call, put, all, takeLatest } from "typed-redux-saga";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.ts";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categoryAction.ts";

import { CATEGORIES_ACTION_TYPES } from "./categoryTypes.ts";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
