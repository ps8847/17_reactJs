import React , {useState} from "react";


const Example2 = () => {

  const [inputValue , setinputValue] = useState("Prince");

  let onChange = (event) => {
    const newValue = event.target.value;
    setinputValue(newValue);
    
  }
  return (
    <>
   
     <h1>React useState hook</h1>
    <input placeholder="enter something..." onChange={onChange}/>
    {inputValue}
    </>
  );
};

export default Example2;

