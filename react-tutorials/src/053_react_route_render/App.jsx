import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Service from "./Service";
import Home from "./Home";

const App = () => {
  const Name = () => {
    return <h1> hello, this is name page </h1>;
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name="Contact" />} />
        <Route path="/about" element={<About name="About" />} />
        <Route path="/service" element={<Service name="Service" />} />
        <Route path="/contact" element={<Contact name="Contact" />} />
        <Route path="/contact/Name" element={<Name />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
