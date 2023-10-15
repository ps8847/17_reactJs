import React, { useLayoutEffect , useEffect , useRef} from "react";


const Layoutexample1 = () => {
 
	const inputRef = useRef(null);

 useLayoutEffect(() => {
  console.log(inputRef.current.value);
 } , [])


 useEffect(() => {
  inputRef.current.value= "Hello"
 } , [])
  
  return (
    <>
    <input type="text" ref={inputRef} value="Prince" style={{width: 400, height:50}}/>
    </>
  );
};

export default Layoutexample1;
