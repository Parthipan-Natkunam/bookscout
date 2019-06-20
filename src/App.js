import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";

import "./App.css";

import SearchWidget from "./containers/SearchWidget";
import Header from "./components/Header/Header";
import Results from "./containers/Results";

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  // componentDidUpdate() {
  //   if (!!this.state.searchTerm) {
  //     fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`
  //     ).then(resp => console.log(resp));
  //   }
  // }
  render() {
    return (
      <Provider store={store}>
        <Header />
        <SearchWidget />
        <Results />
      </Provider>
    );
  }
}

export default App;
