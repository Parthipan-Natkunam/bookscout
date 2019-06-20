import React from "react";
import createSagaMiddleware from "redux-saga";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas";

import "./App.css";

import SearchWidget from "./containers/SearchWidget";
import Header from "./components/Header/Header";
import Results from "./containers/Results";

const sagaMiddleWare = createSagaMiddleware();

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootSaga);

class App extends React.Component {
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
