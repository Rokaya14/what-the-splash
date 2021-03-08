import { call, select, takeEvery, put } from "redux-saga/effects";
import { setError, setImages } from "../actions/actions";
import fetchImages from "../api";
import { IMAGES } from "../constants";

const getPage = (state) => state.nextPage;
function* handelImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    console.log(images);
    yield put(setImages(images));
  } catch (error) {
    // dispatch error action
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handelImagesLoad);
}
