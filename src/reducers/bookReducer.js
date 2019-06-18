import store from "../store/initialState";

const book = (state = store.books, action) => {
  switch (action) {
    case "UPDATE_RESULT":
      return [...action.payload];
    default:
      return [...state];
  }
};

export default book;
