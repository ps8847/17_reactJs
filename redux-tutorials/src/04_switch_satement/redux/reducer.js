import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
  console.warn(action);

  //  if (action.type === ADD_TO_CART) {
  //    console.log("reducer called ", action);
  //    return action.data;
  //  } else {
  //    return "no action matched";
  //  }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart in reducer called ", action);
      return 1 + 1;
    case REMOVE_TO_CART:
      console.log("REMOVE to cart in reducer called ", action);
      return 1 - 1;
    default:
      return "no action callled";
  }
};
