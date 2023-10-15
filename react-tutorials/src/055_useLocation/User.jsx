import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const { name, lname } = useParams();
  const location = useLocation();

  return (
    <>
      <h1>
        user page {name} {lname}
      </h1>
      <p> My current location is {location.pathname}</p>
      {location.pathname === `/user/vinod/thapa` ? (
        <button onClick={() => alert(`you are awesome`)}> Click me</button>
      ) : null}
    </>
  );
};

export default User;
