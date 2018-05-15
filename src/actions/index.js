import axios from 'axios';

const ROOT_URL = 'https://blog-backend-zjohnson.herokuapp.com/api';
const API_KEY = '?key=z_johnson';
const getURL = `${ROOT_URL}/posts${API_KEY}`;


// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
export function createPost(post, history) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls

    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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

export function authError(error) {
  return {
    type: 'AUTH_ERROR',
    message: error,
  };
}

export function signinUser(user, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email: user.email, password: user.password }).then((response) => {
      dispatch({ type: 'AUTH_USER' });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


export function signupUser(user, history) {
  // does an axios.post on the /signup endpoint (only difference from above)
  console.log('I am getting to the signupUser');
  console.log(`${ROOT_URL}/signup`);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email: user.email, username: user.username, password: user.password }).then((response) => {
      dispatch({ type: 'AUTH_USER' });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: 'DEAUTH_USER' });
    history.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
