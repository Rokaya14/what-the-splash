import { select, takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";

const getPage = (state) => state.nextPage;
function* handelImagesLoad() {
  const page = yield select(getPage);
  console.log(page);
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handelImagesLoad);
}
