import React , { useState } from "react";


const App = () => {

  let NewTime = new Date().toLocaleTimeString();

  const [CurrentTime, setCurrentTime] = useState(NewTime);

  const CurTime = () => {
    setCurrentTime(NewTime = new Date().toLocaleTimeString());
  };

  return (
  <>
  <h1> {CurrentTime} </h1>
  <button onClick={CurTime}> Get time </button>
  </>
  );
};

export default App;