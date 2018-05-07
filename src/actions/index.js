import axios from 'axios';

const ROOT_URL = 'https://blog-backend-zjohnson.herokuapp.com/api';
const API_KEY = '?key=z_johnson';
const getURL = `${ROOT_URL}/posts${API_KEY}`;


// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
export function createPost(post, history) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.post(getURL, post).then((response) => {
      // do something with response.data  (some json)
      axios.get(getURL).then((responses) => {
        // do something with response.data  (some json)
        dispatch({ type: 'ITEMS_FETCH_DATA_SUCCESS', payload: { posts: responses.data } });
      }).catch((error) => {
        // hit an error do something else!
        console.log('There was an error!!!!');
      });
      history.push('/');
    }).catch((error) => {
      // hit an error do something else!
      console.log(`error ${error.message}`);
    });
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    // /(`${ROOT_URL}/posts/${post.id}${API_KEY}`,
    axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`).then((response) => {
      // do something with response.data  (some json)
      axios.get(getURL).then((responses) => {
        // do something with response.data  (some json)
        dispatch({ type: 'ITEMS_FETCH_DATA_SUCCESS', payload: { posts: responses.data } });
      }).catch((error) => {
        // hit an error do something else!
        console.log('There was an error!!!!');
      });
      history.push('/');
      // history.push('/');
    }).catch((error) => {
      // hit an error do something else!
      console.log(`error ${error.message}`);
    });
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}
export function itemsFetchData() {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.get(getURL).then((response) => {
      console.log(response);
      // do something with response.data  (some json)
      dispatch({ type: 'ITEMS_FETCH_DATA_SUCCESS', payload: { posts: response.data } });
    }).catch((error) => {
      // hit an error do something else!
      console.log(`error ${error.message}`);
    });
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`).then((response) => {
      console.log(response);
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POST', payload: { post: response.data } });
    }).catch((error) => {
      // hit an error do something else!
      console.log('There was an error!!!!');
    });
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, post).then((response) => {
      axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`).then((responseSing) => {
        console.log(responseSing);
        // do something with response.data  (some json)
        dispatch({ type: 'FETCH_POST', payload: { post: responseSing.data } });
      }).catch((error) => {
        // hit an error do something else!
        console.log('There was an error!!!!');
      });
    }).catch((error) => {
      // hit an error do something else!
      console.log('There was an error!!!!');
    });
  };
}
