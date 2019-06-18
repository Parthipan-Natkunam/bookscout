import store from "../store/initialState";

const search = (state = store.search, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return [action.payload, ...state];
    default:
      return [...state];
  }
};

export default search;
