import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import imageReducer from "./imagesReducer";
import loadImagesReducer from "./loadImagesReducer";

const rootReducer = combineReducers({
  isLoading: loadImagesReducer,
  images: imageReducer,
  error: errorReducer,
});

/*  state {
      isLoading : false ,
      images : [] ,
      error : null
    }
*/
export default rootReducer;
