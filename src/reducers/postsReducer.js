// import { ActionTypes } from '../actions/index';

const initialState = {
  all: [],
  post: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return Object.assign({}, state, { all: action.payload.posts });
    default:
      return state;
  }
};

export default postsReducer;
