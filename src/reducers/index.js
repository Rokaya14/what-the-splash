import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import imageReducer from "./imagesreducer";
import loadImagesReducer from "./loadImagesReducer";

const rootReducer = combineReducers({
  isLoading: loadImagesReducer,
  images: imageReducer,
  error: errorReducer,
});
export default rootReducer;
