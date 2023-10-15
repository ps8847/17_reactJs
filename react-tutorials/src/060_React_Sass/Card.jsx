import React from "react";

import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10">
        <div className="card">
          <img src={props.imgsrc} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold p-1">{props.title}</h5>
            <p className="card-text p-3">
              some quick exmaple text to build on the card tite and make the
              card vody heavier and lok beautiful
            </p>
            <NavLink href="#" className="btn btn-primary">
              Go Somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
