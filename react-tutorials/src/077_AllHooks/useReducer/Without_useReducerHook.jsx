import React , {useState} from "react";


const Without_useReducerHook = () => {

  const [count , setCount] = useState(0);
  const [showText, setShowText] = useState(true);

 
  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        setShowText(!showText);
      }}>
        Click Here
      </button>

      {!showText && <p>this isa text</p>}
    </div>
    </>
  );
};

export default Without_useReducerHook;

