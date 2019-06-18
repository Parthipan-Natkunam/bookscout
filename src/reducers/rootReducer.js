import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import bookReducer from "./bookReducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  books: bookReducer
});

export default rootReducer;
