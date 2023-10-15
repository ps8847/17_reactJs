import React , {useEffect, useState , useMemo} from "react";
import axios from "axios";


export default function withUseMemo() {

  const [data, setdata] = useState(null);
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => { setdata(response.data)})
  } ,[]);

  const findLongestName = (comments) => {
    if(!comments) return null;

    let longestName = "";
    for(let i = 0; i < comments.length; i++){
      let currentName = comments[i].name;
      if(currentName.length > longestName.length){
        longestName = currentName;
      }
    }

    console.log("this was computed");

    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(data) , [data])
  
  return (
    <div>
      <div>{getLongestName}</div>
      <button onClick={()=> {settoggle(!toggle)}}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

