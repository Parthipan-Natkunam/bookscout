import React from "react";

import { connect } from "react-redux";

import { setSearchTerm } from "../actions/searchActions";

import SearchField from "../components/search/SearchField";

class searchWidgetComponent extends React.Component {
  keyupHandler = ev => {
    if (ev.key === "Enter") {
      this.props.setSearchTerm(ev.target.value);
    }
    return;
  };
  render() {
    return (
      <div className={"search-container"}>
        <SearchField inputHandler={this.keyupHandler} />
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    setSearchTerm: term => {
      dispatch(setSearchTerm(term));
    }
  };
};

const searchWidget = connect(
  null,
  mapDispatchToProps
)(searchWidgetComponent);

export default searchWidget;
