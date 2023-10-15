import { createStore } from "redux";

const dummrReducer = () => {
  return 100;
};
const store = createStore(dummrReducer);

export default store;
