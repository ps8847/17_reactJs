import React from "react"; //used to use jsx
import ReactDOM from "react-dom";
import "./index.css";

const Myname = "Prince";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://ps8847.github.io/My-DevFolio/";

ReactDOM.render(
  <>
    <h1 className="heading">My name is {Myname}</h1>
    <div className="img_div">
      <img src={img1} alt="img not found" />
      <img src={img2} alt="img not found" />
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img3} alt="img not found" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);

// here class is Used as >>>> className
