import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const { isSubmenuOpen, location, page } = useGlobalContext();
  const container = useRef(null);
  const links = page.links;

  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = location;
    menu.style.left = `${center - 50}px`;
    menu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <div>
      <div
        ref={container}
        className={`${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}
      >
        <h5>{page.page}</h5>
        <div className="submenu-items">
          {links.map((li, index) => {
            return (
              <div key={index}>
                <p>{li.icon}</p>
                <p>{li.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
