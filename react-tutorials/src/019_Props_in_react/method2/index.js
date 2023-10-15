import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname="DARK"
      link=""
    />
    <Card
      imgsrc="https://wallpapercave.com/w/wp7418550.jpg"
      title="A Netflix Original Series"
      sname="Extra curicullar"
      link=""
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix Original Series"
      sname="Stranger Things"
      link=""
    />
  </>,
  document.getElementById("root")
);
