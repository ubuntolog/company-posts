import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  simpleReducer,
  postsReducer,
  commentsReducer
});
