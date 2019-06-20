import React from "react";

import ResultCard from "../components/Results/ResultCard";

import "./style.css";

class Results extends React.Component {
  render() {
    return (
      <div className={"results__container"}>
        <div className={"results__inner-wrapper"}>
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
    );
  }
}

export default Results;
