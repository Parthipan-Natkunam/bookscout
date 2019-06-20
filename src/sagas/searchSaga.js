import { put, takeLatest } from "redux-saga/effects";

function* fetchBooks(action) {
  let results = yield fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${action.payload}`
  ).then(response => response.json());
  let { items } = results;
  if (!!items && items.length > 0) {
    let bookData = items.map(item => {
      return { id: item.id, data: item.volumeInfo };
    });
    yield put({ type: "UPDATE_RESULT", payload: bookData });
  } else {
    yield null;
  }
}

export default function* searchSaga() {
  yield takeLatest("SEARCH_BOOK", fetchBooks);
}
