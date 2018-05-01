// src/js/components/Form.js
// borrowing heavily again from https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions/index';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    return (
      <div>
        <h1>{this.props.posts.post.title}</h1>
        <h2>{this.props.posts.post.tags}</h2>
        <h2>{this.props.posts.post.content}</h2>
        <h2>{this.props.posts.post.cover_url}</h2>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
  };
};

const mapStateToProps = state => ({
  posts: state.posts, // come back to this to verify correct indexing
  // state.itemsHasErrored,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
