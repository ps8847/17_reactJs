import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import Navbar from "./Navbar";

import Home from "./Home";
import Search from "./Search";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
