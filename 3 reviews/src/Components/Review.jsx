import React from "react";

const Review = ({ data }) => {
  return (
    <div>
      <p>{data.id}</p>
      <img src={data.image} alt="" width={"100px"} height={"100px"} />
      <p>{data.name}</p>
      <p>{data.job}</p>
    </div>
  );
};

export default Review;
