import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

export const productlist = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};

//export const setProductlist = (data) => {
//  console.warn("set ation");
//  return {
//    type: SET_PRODUCT_LIST,
//    data,
//  };
//};
