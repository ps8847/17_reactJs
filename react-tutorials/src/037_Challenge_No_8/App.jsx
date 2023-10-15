import React, { useState } from "react";

const App = () => {
  const [number, setnumber] = useState(0);

  const incNum = () => {
    setnumber(number + 1);
  };

  const dicNum = () => {
    if (number > 0) {
      setnumber(number - 1);
    } else {
      alert("zero limit reached!!");
      setnumber(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {number} </h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={dicNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
