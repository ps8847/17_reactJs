import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  //useEffect(() => {
  //  alert("i am clicked");
  //});  // will be triggered whenever any effect will occur in page

  //useEffect(() => {
  //  alert("i am clicked");
  //}, []); // will be triggered only when we first time refresh the page

  useEffect(() => {
    alert("i am clicked");
  }, [num]); // will be triggered when we will hit only the first button
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me {num}
      </button>

      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        click me {nums}
      </button>
    </>
  );
};

export default App;
