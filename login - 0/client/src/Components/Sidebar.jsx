import React from "react";
import "../App.css";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div>
      <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="close-btn">
          <FaTimes onClick={closeSidebar} />
        </div>
        <div className="text">sidebar content</div>
      </div>
    </div>
  );
};

export default Sidebar;
