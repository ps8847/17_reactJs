import React from "react"; //used to use jsx
import ReactDOM from "react-dom";

const Myname = "Prince";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>{Myname}</h1>
    <p>Today's date is : {currDate}</p>
    <p>Current Time is : {currTime}</p>
  </>,
  document.getElementById("root")
);
