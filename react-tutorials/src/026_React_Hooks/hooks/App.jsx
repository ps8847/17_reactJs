import React , { useState } from "react";


const App = () => {


  // initially count has Zero and useState hold's current Value and SetCount holds the updated value and it will pass it to useState()
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  return (
  <>
  <h1> {count} </h1>
  <button onClick={IncNum}> Click Me </button>
  </>
  );
};

export default App;