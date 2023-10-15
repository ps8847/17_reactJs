import React, { useLayoutEffect , useEffect} from "react";


const Layoutexample1 = () => {
 
 useLayoutEffect(() => {
  console.log("uselayout effect");
 } , [])
  

 useEffect(() => {
  console.log("useeffect");
 } , [])
  
  return (
    <>
    
    </>
  );
};

export default Layoutexample1;
