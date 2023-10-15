import React, { useState } from "react";
import { questions } from "./api";
import "./index.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main_div">
        <h1>React Interview Questions</h1>
        {data.map((curElement) => {
          return <MyAccordian key={curElement.id} {...curElement} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
