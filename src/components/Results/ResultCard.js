import React from "react";

import "./style.css";

const defaultImage = require("../../sharedImages/logo.svg");

const ResultCard = props => {
  //return <div className={"result__card"}>results shown here</div>;
  let { title, subtitle, description, imageLinks } = props.info;
  title = title || "";
  subtitle = subtitle || "";
  description = description || "Description is not available for this title";
  imageLinks = (imageLinks && imageLinks.smallThumbnail) || defaultImage;
  return (
    <div className={"result__card"}>
      <img src={imageLinks} alt={title} />
      <h3> {title.length > 100 ? `${title.substring(0, 100)}...` : title} </h3>
      <h4>
        {subtitle.length > 100 ? `${subtitle.substring(0, 100)}...` : subtitle}
      </h4>
      <p className={"result__description"}>{`${description.substring(
        0,
        150
      )}...`}</p>
    </div>
  );
};

export default ResultCard;
