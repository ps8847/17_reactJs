import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
  console.warn(action);

  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart in reducer called ", action);
      //  return [action.data];
      return [action.data, ...data];

    default:
      return data;
  }
};
