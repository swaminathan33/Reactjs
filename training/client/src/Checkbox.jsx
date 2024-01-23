import React, { useState } from "react";
import "./App.css"; // Import your CSS file

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
