import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3

class postList extends Component {
  componentDidMount() {
    const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
    const API_KEY = '?key=z_johnson';
    this.props.fetchPosts(`${ROOT_URL}/posts${API_KEY}`);
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.posts.all.length === 0) {
      return <p>Connectivity is bad. Wait a few moments while we try again</p>;
    }
    return (
      <ul>
        {this.props.posts.all.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
                ))}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts, // come back to this to verify correct indexing
  // state.itemsHasErrored,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: url => dispatch(itemsFetchData(url)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(postList);
