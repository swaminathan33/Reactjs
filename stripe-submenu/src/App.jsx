import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import Submenu from "./Components/Submenu";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
};

export default App;
