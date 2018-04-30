// src/js/components/Form.js
// borrowing heavily again from https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: post => dispatch(createPost(post)),
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    const { title } = this.state;
    const id = Math.random() * 1000000000000000;
    this.props.createPost({ title, id });
    this.setState({ title: '' });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">
          SAVE
        </button>
      </form>
    );
  }
}
export default withRouter(connect(null, mapDispatchToProps)(ConnectedForm));
