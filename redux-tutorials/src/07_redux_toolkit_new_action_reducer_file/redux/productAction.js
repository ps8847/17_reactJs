import { PRODUCT_LIST } from "./constant";

export const productlist = async () => {
  //  let data = "hello";
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = await data.json();
  console.log("action is calledproduct action", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
