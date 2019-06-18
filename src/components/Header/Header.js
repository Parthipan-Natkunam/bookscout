import React from "react";

import "./style.css";

const logoImage = require("../../sharedImages/logo.svg");

const Header = () => {
  return (
    <h2>
      <img src={logoImage} alt="logo" />
      BookScout
    </h2>
  );
};

export default Header;
