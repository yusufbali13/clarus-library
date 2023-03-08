import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(id);
  console.log(state);
  return <div>Detail</div>;
};

export default Detail;
