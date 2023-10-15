import React , { useState } from "react";



const App = () => {

  const [firstName , setFirstName] = useState("");
  const [fullInputedData , setfullInputedData] = useState();
  const [lastName , setLastName] = useState("");

  const inputEvent = (event) => {
    setFirstName(event.target.value);
  }
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  }

  const onSubmits  = (e) => {
    e.preventDefault();
    setfullInputedData(firstName + " " + lastName);
  }
return (
  //same previous thing with form tag

  <>
  <form onSubmit={onSubmits}>
  <div>
    
    <h1> Hello {fullInputedData}</h1>
    <input type='text' placeholder="Enter your first name" onChange={inputEvent} />
    <input type='text' placeholder="Enter your last name" onChange={inputEventTwo } />
    <button type="submit"> Click Me 👍</button>
  </div>
    </form>
  </>
)
};

export default App;