import React , {useState} from "react";


const Example1 = () => {

  const [counter , setCounter] = useState(0);

  const increment = () =>{
    setCounter(counter + 1)
  }
  return (
    <>
    {counter}
     <h1>React useState hook</h1>
     <button onClick={increment}>
      Increment
     </button>
    </>
  );
};

export default Example1;

