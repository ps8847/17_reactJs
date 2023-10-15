import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
  const { name, lname } = useParams();
  const location = useLocation();
  const history = useNavigate();
  return (
    <>
      <h1>
        user page {name} {lname}
      </h1>
      <p> My current location is {location.pathname}</p>
      {location.pathname === `/user/vinod/thapa` ? (
        <button onClick={() => history(-1)}> Click me</button>
      ) : null}
    </>
  );
};

export default User;
