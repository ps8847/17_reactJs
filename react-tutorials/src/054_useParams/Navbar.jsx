import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          Home Page
        </NavLink>

        <NavLink exact activeClassName="active_class" to="/user/prince/sharma">
          User
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
