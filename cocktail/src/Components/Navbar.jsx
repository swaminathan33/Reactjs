import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "../App.css";

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
          <div className="home">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="about">
            <Link to={"/about"}>About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
