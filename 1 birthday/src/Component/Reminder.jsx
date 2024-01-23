import React from "react";

const Reminder = ({ data }) => {
  return (
    <div className="shadow-sm w-25">
      <h5>{data.name}</h5>
      <img src={data.image} alt="" width={"50px"} height={"50px"} />
    </div>
  );
};

export default Reminder;
