import React , { useState } from "react";

//when a form value is controlled by react then it comes under controlled component.. 

// here in form we can' provide form value as >>
// value="hello"      we need to use      defaultValue="hello"
// <input type='text' placeholder="Enter your name" defaultValue="" />

/*
const App = () => {

  const [name , setName] = useState();


  const inputEvent = (event) => {
    setName(event.target.value);
  }
return (
  <>
  <div>
    <h1> Hello {name}</h1>
    <input type='text' placeholder="Enter your name" onChange={inputEvent} />
    <button> Click Me 👍</button>
  </div>
  </>
)
};
*/

const App = () => {

  const [name , setName] = useState();
  const [fullInputedData , setfullInputedData] = useState()

  const inputEvent = (event) => {
    setName(event.target.value);
  }

  const onSubmit = () => {
    setfullInputedData(name);
  }
return (
  <>
  <div>
    <h1> Hello {fullInputedData}</h1>
    <input type='text' placeholder="Enter your name" onChange={inputEvent} />
    <button onClick={onSubmit}> Click Me 👍</button>
  </div>
  </>
)
};

export default App;