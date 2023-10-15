import React , { useState } from "react";



const App = () => {

  const [name , setName] = useState("");
  const [fullInputedData , setfullInputedData] = useState()

  const inputEvent = (event) => {
    setName(event.target.value);
  }

  const onSubmits  = (e) => {
    e.preventDefault();
    setfullInputedData(name);
  }
return (
  //same previous thing with form tag

  <>
  <form onSubmit={onSubmits}>
  <div>
    
    <h1> Hello {fullInputedData}</h1>
    <input type='text' placeholder="Enter your name" onChange={inputEvent} />
    <button type="submit"> Click Me 👍</button>
  </div>
    </form>
  </>
)
};

export default App;