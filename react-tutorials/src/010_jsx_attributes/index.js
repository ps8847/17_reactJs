import React from "react"; //used to use jsx
import ReactDOM from "react-dom";

const Myname = "Prince";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://ps8847.github.io/My-DevFolio/";

ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is {Myname}</h1>
    <img src={img1} alt="img not found" />
    <img src={img2} alt="img not found" />
    <a href={link} target="_blank" rel="noreferrer">
      {" "}
      {/*here rel will be automatically added by react*/}
      <img src={img3} alt="img not found" />
    </a>
  </>,
  document.getElementById("root")
);

// here the attributes should be in camelCase
// here the tags like <img> will hve their closing tag also
// dont use <img> </img>
// instead of that use
// <img />
// same for <br/>  and all other also

// attributes are called properties in React
