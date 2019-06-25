import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas";

const sagaMiddleWare = createSagaMiddleware();

const reduxExtension =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    reduxExtension
  )
);

export const initSaga = () => {
  sagaMiddleWare.run(rootSaga);
};
