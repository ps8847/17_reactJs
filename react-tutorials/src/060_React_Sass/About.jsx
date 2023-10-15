import React from "react";
import web2 from "../src/Images/5.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web2}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
