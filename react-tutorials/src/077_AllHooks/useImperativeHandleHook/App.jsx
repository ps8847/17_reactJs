import React , {useRef} from "react";
import { Button } from "./Button";

const App = () => {
 
const buttonRef = useRef(null)
  
  return (
    <>
   <button onClick={() => {buttonRef.current.alterToggle()}}>Button from parent</button>
   <Button ref={buttonRef}/>
    </>
  );
};

export default App;
