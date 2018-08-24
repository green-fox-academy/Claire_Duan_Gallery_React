import { combineReducers } from 'redux';
import currentIndex from './currentIndex';
import images from './images';

const rootReducer = combineReducers({
  currentIndex,
  images,
});

export default rootReducer;
