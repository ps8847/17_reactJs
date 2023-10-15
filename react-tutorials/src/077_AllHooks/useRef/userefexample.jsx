import React, { useRef } from "react";


const userefexample = () => {
 
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  }
  return (
    <>
      <h1>Prince</h1>
      <input type="text" placeholder="ex.." ref={inputRef}/>
      <button onClick={onClick}>Change name</button>
    </>
  );
};

export default userefexample;
