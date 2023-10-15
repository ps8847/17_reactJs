import React , { useState } from "react";


const App = () => {

  let Time = new Date().toLocaleTimeString();

  const [CurrentTime, setCurrentTime] = useState(Time);

  setInterval(() => {
    setCurrentTime(Time = new Date().toLocaleTimeString());
  } , 1000)

  return (
  <h1> {CurrentTime} </h1>

  );
};

export default App;