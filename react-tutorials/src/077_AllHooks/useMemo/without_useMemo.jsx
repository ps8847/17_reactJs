import React , {useEffect, useState} from "react";
import axios from "axios";


export default function without_useMemo() {

  const [data, setdata] = useState(null);

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

  return (
    <div>
      <div>{findLongestName(data)}</div>
    </div>
  )
}

