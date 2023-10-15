import React , {useState} from "react";
import axios from "axios";
import Child from "./Child";

export default function App() {

  const [data, setdata] = useState("yo, please sub tothe channel");
  const [toggle, settoggle] = useState(false);

const returnComment = () => {
  return data;
}

  return (
    <div>
     <Child returnComment={returnComment}/>
      <button onClick={()=> {settoggle(!toggle)}}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

