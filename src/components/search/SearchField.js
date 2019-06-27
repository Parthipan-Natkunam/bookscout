import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      <button className={"searchfield__icon"} type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchField;
