import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import Navbar from "./Navbar";
import Home from "./Home";
import User from "./User";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:name/:lname" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
