import React, { useEffect , useState} from "react";
import axios from "axios";

const UseEffectExample = () => {
  const [data, setdata] = useState("");
  const [count , setcount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        //console.log(response);
        setdata(response.data[0].email)
        console.log("api was claled");
      });
  } , [count]);
  
  //useEffect(() => {
  //  axios
  //    .get("https://jsonplaceholder.typicode.com/comments")
  //    .then((response) => {
  //      //console.log(response);
  //      setdata(response.data[0].email)
  //      console.log("api was claled");
  //    });
  //} , []);

  return (
    <>
      <div>Hello world
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={() => { setcount( count + 1)}}>
          Click
        </button>
      </div>
    </>
  );
};

export default UseEffectExample;
