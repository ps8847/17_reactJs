import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  //  console.log("action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  //  console.log("action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;
