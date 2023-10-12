import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// catch actions before hitting a reducer and log the state
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// allows to pass multiple middlewares
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// facilitates the movement and passing of actions through the reducers
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
