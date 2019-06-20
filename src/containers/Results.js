import React from "react";

import { connect } from "react-redux";

import ResultCard from "../components/Results/ResultCard";

import "./style.css";

class Results extends React.Component {
  render() {
    return (
      <div className={"results__container"}>
        <div className={"results__inner-wrapper"}>
          {this.props.bookData.map(book => {
            return <ResultCard key={book.id} uid={book.id} info={book.data} />;
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    bookData: state.books
  };
};

export default connect(mapStateToProps)(Results);
