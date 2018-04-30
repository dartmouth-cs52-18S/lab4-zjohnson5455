import axios from 'axios';
// keys for actiontypes
/* export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  ADD_ARTICLE: 'ADD_ARTICLE',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const API_KEY = '?key=yourfirstname_yourlastname';

export function fetchPosts() {

}

export const addArticle = article => ({ type: 'ADD_ARTICLE', payload: article });

export function updatePost(post) {

}

export function fetchPost(id) {

}

export function deletePost(id, history) {

} */

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}
export function itemsFetchData(url) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.get(url).then((response) => {
      // do something with response.data  (some json)
      console.log(response.data);
      dispatch({ type: 'ITEMS_FETCH_DATA_SUCCESS', payload: { posts: response.data } });
    }).catch((error) => {
      // hit an error do something else!
      console.log('There was an error!!!!');
    });
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}
