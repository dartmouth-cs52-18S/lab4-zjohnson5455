// import { ActionTypes } from '../actions/index';

const initialState = {
  all: [],
  post: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return Object.assign({}, state, { all: action.payload.posts });
    case 'FETCH_POST':
      return Object.assign({}, state, { post: action.payload.post });
    default:
      return state;
  }
};

export default postsReducer;
