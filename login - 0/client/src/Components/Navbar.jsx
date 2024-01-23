import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../App.css";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <div>
      <nav>
        <div className="logo">
          <h3>logo</h3>
        </div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <div className="toggle-btn">
          <FaBars onClick={openSidebar} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
