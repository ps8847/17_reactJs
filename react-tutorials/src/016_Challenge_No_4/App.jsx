import React from "react";

function App() {
  let curTime = new Date();
  curTime = curTime.getHours();
  console.log(curTime);
  let greeting = "";
  
  // for css
  const cssStyle = {};
  
  if (curTime >= 1 && curTime < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curTime >= 12 && curTime < 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
  } else if (curTime >= 16 && curTime < 19) {
    greeting = "Good Evening";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }

  return <>
  <div>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>
}

export default App;
