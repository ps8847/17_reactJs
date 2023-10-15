//import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./ProductSaga";
import createSagaMiddleware from "@redux-saga/core";

//const store = createStore(rootReducer);
const sagamiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagamiddleware],
});

sagamiddleware.run(productSaga);
export default store;
