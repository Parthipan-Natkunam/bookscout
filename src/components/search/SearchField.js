import React from "react";
import "./style.css";

const SearchField = props => {
  return (
    <div className={"searchfield"}>
      <input
        type="text"
        placeholder="Enter Search Term Here..."
        defaultValue=""
        className={"searchfield__input"}
        onKeyUp={props.inputHandler}
      />
      <div className={"searchfield__icon"}>&#9740;</div>
    </div>
  );
};

export default SearchField;
