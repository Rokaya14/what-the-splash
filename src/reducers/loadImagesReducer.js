import { IMAGES } from "../constants";
//only change state to true when action is loading IMAGES_LOAD  فيما عدا ذلك ف هي فوولس
const loadImagesReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return false;
    case IMAGES.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};
export default loadImagesReducer;
