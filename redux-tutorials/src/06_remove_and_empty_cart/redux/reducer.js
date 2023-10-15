import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {
  console.warn(action);

  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart in reducer called ", action);
      //  return [action.data];
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log("remove to cart in reducer called ", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case EMPTY_CART:
      console.log("empty cart in reducer called ", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
