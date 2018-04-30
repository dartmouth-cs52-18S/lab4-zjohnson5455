// src/js/components/Form.js
// borrowing heavily again from https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (url, post, history) => dispatch(createPost(url, post, history)),
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      tags: '',
      content: '',
      cover_url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
    const API_KEY = '?key=z_johnson';
    const fields = {
      title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.cover_url,
    };
    this.props.createPost(`${ROOT_URL}/posts${API_KEY}`, fields, this.props.history);
  }
  render() {
    return (
      <div>
        <p>Title: </p>
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <p>Tags: </p>
        <input
          type="text"
          id="tags"
          value={this.state.tags}
          onChange={this.handleChange}
        />
        <p>Content: </p>
        <input
          type="text"
          id="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <p>Cover URL: </p>
        <input
          type="text"
          id="cover_url"
          value={this.state.cover_url}
          onChange={this.handleChange}
        />
        <p>Finished? </p>
        <button onClick={this.handleSubmit}>
            SUBMIT
        </button>
      </div>

    );
  }
}
export default withRouter(connect(null, mapDispatchToProps)(ConnectedForm));
