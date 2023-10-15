import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productlist = () => {
  //  let data = "hello";
  //let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //data = await data.json();
  //console.log("action is calledproduct action", data);
  return {
    type: PRODUCT_LIST,
  };
};

//export const setProductlist = (data) => {
//  console.warn("set ation");
//  return {
//    type: SET_PRODUCT_LIST,
//    data,
//  };
//};
