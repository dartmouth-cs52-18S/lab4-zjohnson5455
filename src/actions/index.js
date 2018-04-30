// import axios from 'axios';
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
export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}
export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
}
export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
