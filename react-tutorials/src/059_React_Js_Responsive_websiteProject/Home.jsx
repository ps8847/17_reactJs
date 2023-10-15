import React from "react";
import web from "../src/Images/1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
