import axios from 'axios';


// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
export function createPost(url, post, history) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.post(url, post).then((response) => {
      // do something with response.data  (some json)
      axios.get(url).then((responses) => {
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
export function itemsFetchData(url) {
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    axios.get(url).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: 'ITEMS_FETCH_DATA_SUCCESS', payload: { posts: response.data } });
    }).catch((error) => {
      // hit an error do something else!
      console.log('There was an error!!!!');
    });
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}
