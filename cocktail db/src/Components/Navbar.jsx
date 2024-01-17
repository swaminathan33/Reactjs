import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/about"}>About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
