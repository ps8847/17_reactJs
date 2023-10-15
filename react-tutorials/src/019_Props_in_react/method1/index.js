import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>WATCH NOW</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

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
