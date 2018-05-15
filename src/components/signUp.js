// src/js/components/Form.js
// borrowing heavily again from https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user, history) => dispatch(signupUser(user, history)),
  };
};

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    const user = {
      email: this.state.email, username: this.state.username, password: this.state.password,
    };
    console.log(user);
    this.props.signup(user, this.props.history);
  }
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <p>Email: </p>
        <input
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <p>Username: </p>
        <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <p>Password: </p>
        <input
          type="text"
          id="password"
          value={this.state.password}
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
export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));
