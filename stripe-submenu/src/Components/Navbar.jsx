import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar } = useGlobalContext();

  const handleSubmenu = (e) => {
    const page = e.target.textContent;
    const box = e.target.getBoundingClientRect();
    const center = (box.right + box.left) / 2;
    const bottom = box.bottom;
    openSubmenu(page, { center, bottom });
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("nav-btn")) {
      closeSubmenu();
    }
  };

  return (
    <div>
      <nav onMouseOver={handleCloseSubmenu}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <button className="nav-btn" onMouseOver={handleSubmenu}>
            products
          </button>
          <button className="nav-btn" onMouseOver={handleSubmenu}>
            developers
          </button>
          <button className="nav-btn" onMouseOver={handleSubmenu}>
            company
          </button>
        </div>
        <div className="signin-btn">
          <button>Sign In</button>
        </div>
        <div className="toggle-menu" onClick={openSidebar}>
          <FaBars />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
