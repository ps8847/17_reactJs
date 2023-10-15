import React from "react"; //used to use jsx
import ReactDOM from "react-dom";

// METHOD 1 OF FRAGMENTS
/*
ReactDOM.render(
  <React.Fragment>
    <h1> hello world Prince.. </h1>
    <p> this is paragraph tag </p>
    <p> hello world again in p tag</p>
    <pre> this is pre tag </pre>
  </React.Fragment>,
  document.getElementById("root")
);
*/

// METHOD 2 OF FRAGMENTS
ReactDOM.render(
  <>
    <h1> hello world Prince.. </h1>
    <p> this is paragraph tag </p>
    <p> hello world again in p tag</p>
    <pre> this is pre tag </pre>
  </>,
  document.getElementById("root")
);
