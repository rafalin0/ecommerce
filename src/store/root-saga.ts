import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./categories/categorySaga.ts";
import { userSagas } from "./user/userSaga.ts";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
