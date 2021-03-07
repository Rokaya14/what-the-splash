import { takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";

function* worker() {
  console.log("Loading images !");
}

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, worker);
}
export default rootSaga;
