import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">About us</Link>
      <Link to="/contact">Contact us</Link>

      <br />
      <NavLink to="/" activeClassName="active_class">
        About us
      </NavLink>
      <NavLink to="/contact" activeClassName="active_class">
        Contact us
      </NavLink>

      <br />
      <a href="/">AboutUs</a>
      <a href="/contact">ContactUs</a>
    </>
  );
};

export default Navbar;
