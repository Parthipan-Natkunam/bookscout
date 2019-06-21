import React from "react";

import "./App.css";

import SearchWidget from "./containers/SearchWidget";
import Header from "./components/Header/Header";
import Results from "./containers/Results";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchWidget />
        <Results />
      </React.Fragment>
    );
  }
}

export default App;
