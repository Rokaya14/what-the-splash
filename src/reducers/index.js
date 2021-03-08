import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import imageReducer from "./imagesReducer";
import loadImagesReducer from "./loadImagesReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  isLoading: loadImagesReducer,
  images: imageReducer,
  error: errorReducer,
  nextPage: pageReducer,
});

/*  state {
      isLoading : false ,
      images : [] ,
      error : null,
      nextPage: 1
    }
*/
export default rootReducer;
