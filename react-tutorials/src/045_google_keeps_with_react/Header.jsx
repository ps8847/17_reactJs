import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height="70" width="70" />
        <h2> Prince's Google Keep</h2>
      </div>
    </>
  );
};

export default Header;
