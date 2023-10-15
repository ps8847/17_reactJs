import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let curTime = new Date();
curTime = curTime.getHours();
let greeting = "";

// for css
const cssStyle = {};

if (curTime >= 1 && curTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curTime >= 12 && curTime < 4) {
  greeting = "Good Afternoon";
  cssStyle.color = "yellow";
} else if (curTime >= 4 && curTime < 7) {
  greeting = "Good Evening";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
