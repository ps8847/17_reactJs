import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { name, lname } = useParams();
  return (
    <h1>
      user page {name} {lname}
    </h1>
  );
};

export default User;
