import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action is called", data);
  return {
    type: REMOVE_TO_CART,
    data: "hello",
  };
};
