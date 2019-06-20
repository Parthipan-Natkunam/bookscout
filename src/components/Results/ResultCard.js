import React from "react";

import "./style.css";

const defaultImage = require("../../sharedImages/logo.svg");

const ResultCard = props => {
  //return <div className={"result__card"}>results shown here</div>;
  let { title, subtitle, description, imageLinks } = props.info;
  description = description || "Description is not available for this title";
  imageLinks = (imageLinks && imageLinks.smallThumbnail) || defaultImage;
  return (
    <div className={"result__card"}>
      <img src={imageLinks} alt={title} />
      <h3> {title} </h3>
      <h4>{subtitle}</h4>
      <p className={"result__description"}>{`${description.substring(
        0,
        150
      )}...`}</p>
    </div>
  );
};

export default ResultCard;
