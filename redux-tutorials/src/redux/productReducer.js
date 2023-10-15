import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {
  console.warn(action);

  switch (action.type) {
    //case PRODUCT_LIST:
    //  console.log("product list in reducer called ", action);
    //  return [action.data];

    case SET_PRODUCT_LIST:
      console.log("product list in reducer called ", action);
      return [...action.data];

    default:
      return data;
  }
};
