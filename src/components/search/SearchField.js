import React, { useRef } from "react";
import "./style.css";

const SearchField = props => {
  const searchInput = useRef(null);
  return (
    <form className={"searchfield"} onSubmit={props.submitHandler(searchInput)}>
      <input
        type="text"
        placeholder="Enter Search Term Here..."
        defaultValue=""
        ref={searchInput}
        className={"searchfield__input"}
      />
      <input className={"searchfield__icon"} type="submit" value="&#9740;" />
    </form>
  );
};

export default SearchField;
