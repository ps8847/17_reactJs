import React from "react"; //used to use jsx
import ReactDOM from "react-dom";

const fname = "Prince";
const lname = "sharma";

// ***** without template literals  ******

//Method 1:

/*
ReactDOM.render(
  <h1>
    my name is {fname} {lname}
  </h1>,
  document.getElementById("root")
);
*/

//Method 2:

/*
ReactDOM.render(
  <h1>my name is {fname + " " + lname}</h1>,
  document.getElementById("root")
);
*/

// ***** with template literals ****

ReactDOM.render(
  <h1>{`my first name is "${fname}" and my last name is "${lname}"`}</h1>,
  document.getElementById("root")
);
