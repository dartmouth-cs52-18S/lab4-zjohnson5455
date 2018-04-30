import { combineReducers } from 'redux';

/* const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
*/
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
