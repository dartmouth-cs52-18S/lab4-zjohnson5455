import { combineReducers } from 'redux';

/* const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
*/
import { items, itemsHasErrored, itemsIsLoading } from './postsReducer';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
});
