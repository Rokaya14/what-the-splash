import { takeEvery } from "redux-saga/effects";

function* worker() {
  console.log("hello saga Worker ^^ ");
}

function* rootSaga() {
  yield takeEvery("hello", worker);
  console.log("hello saga ^^ ");
}
export default rootSaga;
