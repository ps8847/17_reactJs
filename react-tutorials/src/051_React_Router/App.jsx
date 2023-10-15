import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
  const Name = () => {
    return <h1> hello, this is name page </h1>;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*or*/}
        <Route exact path="/contact" element={<Contact />} />

        <Route path="/contact/Name" element={<Name />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
