import React from "react";

import "./style.css";

const ResultCard = props => {
  //return <div className={"result__card"}>results shown here</div>;
  return (
    <div className={"result__card"}>
      <img src="https://via.placeholder.com/150" alt="product" />
      <h3> Title </h3>
      <p className={"result__description"}>
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem.
      </p>
    </div>
  );
};

export default ResultCard;
