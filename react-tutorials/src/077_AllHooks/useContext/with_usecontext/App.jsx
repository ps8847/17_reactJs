import React , {useState, createContext} from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const App = () => {
  
  const [username , setusername] = useState("");

  return (
    <AppContext.Provider value={{ username, setusername}}>
      <Login />

      <User />
    </AppContext.Provider>
  );
};

export default App;
