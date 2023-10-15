import React from "react"; //used to use jsx
import ReactDOM from "react-dom";

const firstname = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  margin: "70px 0", //to use multiple values
  fontFamily: '"Josefin Sans", sans-serif',
};

ReactDOM.render(
  <>
    <h1 style={firstname}>My name is Prince</h1>

    <h1 style={{ color: "red", textAlign: "center" }}> my surname is Sharma</h1>
  </>,
  document.getElementById("root")
);

// here inline css is used as
// {{}}
//and
// values are provided as  >>>   margin-top : 10px ---> (wrong)
//                               marginTop : 10px ---> (right)

// internal style example is Firstname wali h1
// inline style example is lastName wali h1
