import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "../context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <div>
      <div className="toggle-menu">
        <FaBars onClick={openSidebar} />
      </div>
      <div className="modal-button">
        <div>
          <button onClick={openModal}>Modal</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
