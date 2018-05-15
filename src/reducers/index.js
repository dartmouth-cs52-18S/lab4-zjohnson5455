import { combineReducers } from 'redux';

/* const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
*/
import postsReducer from './postsReducer';
import authReducer from './auth_Reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default rootReducer;
