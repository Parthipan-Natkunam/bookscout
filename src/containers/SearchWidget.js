import React from "react";

import { connect } from "react-redux";

import { setSearchTerm, searchBook } from "../actions/searchActions";

import SearchField from "../components/search/SearchField";

class searchWidgetComponent extends React.Component {
  keyupHandler = ev => {
    if (ev.key === "Enter") {
      let searchphrase = ev.target.value;
      this.props.setSearchTerm(searchphrase);
      this.props.fetchBooks(encodeURIComponent(searchphrase));
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
    },
    fetchBooks: term => {
      dispatch(searchBook(term));
    }
  };
};

const searchWidget = connect(
  null,
  mapDispatchToProps
)(searchWidgetComponent);

export default searchWidget;
