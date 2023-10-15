import React , {useState} from "react";
import Login from "./Login";
import User from "./User";

const App = () => {
  
  const [username , setusername] = useState("");

  return (
    <div>
      <Login setusername={setusername}/>

      <User username={username}/>
    </div>
  );
};

export default App;
