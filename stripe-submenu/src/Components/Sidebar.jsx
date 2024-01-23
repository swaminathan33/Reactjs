import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div>
      {/* show-sidebar */}

      <div
        className={`${
          isSidebarOpen ? "sidebar-overlay show-sidebar" : "sidebar-overlay"
        }`}
      >
        <div className="sidebar">
          <div className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </div>
          <div className="sidebar-menu">
            {sublinks.map((item) => {
              const { page, links } = item;
              return (
                <div>
                  <h2>{page}</h2>
                  <div className="sidebar-items">
                    {links.map((link) => {
                      return (
                        <div>
                          <p>{link.icon}</p>
                          <p>{link.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
