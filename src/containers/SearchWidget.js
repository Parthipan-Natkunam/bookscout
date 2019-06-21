import React from "react";

import { connect } from "react-redux";

import { setSearchTerm, searchBook } from "../actions/searchActions";

import SearchField from "../components/search/SearchField";

class searchWidgetComponent extends React.PureComponent {
  initSearch = searchPhrase => {
    if (!!searchPhrase && this.props.previousSearch !== searchPhrase) {
      this.props.setSearchTerm(searchPhrase);
      this.props.fetchBooks(encodeURIComponent(searchPhrase));
    }
    return;
  };
  submitHandler = searchPhrase => ev => {
    ev.preventDefault();
    console.log(ev);
    this.initSearch(searchPhrase.current.value);
  };
  render() {
    return (
      <div className={"search-container"}>
        <SearchField submitHandler={this.submitHandler} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    previousSearch: state.search[0]
  };
};

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
  mapStateToProps,
  mapDispatchToProps
)(searchWidgetComponent);

export default searchWidget;
