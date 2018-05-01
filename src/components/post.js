// src/js/components/Form.js
// borrowing heavily again from https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { createPost } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    // createPost: (url, post, history) => dispatch(createPost(url, post, history)),
  };
};

class Post extends Component {
  constructor() {
    super();
    this.state = {
      // isEditing: false,
    };
  }

  render() {
    console.log(this.props.match.params.postID);
    return (
      <p>Note</p>
    );
  }
}
export default withRouter(connect(null, mapDispatchToProps)(Post));
