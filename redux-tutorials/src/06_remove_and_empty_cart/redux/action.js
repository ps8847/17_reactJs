import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action is called add to cart", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("action is called remove from cart", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = (data) => {
  console.log("action emptycart", data);
  return {
    type: EMPTY_CART,
    data,
  };
};
