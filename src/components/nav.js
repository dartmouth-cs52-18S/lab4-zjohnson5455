
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signoutUser } from '../actions';

class Nav extends Component {
  constructor() {
    super();
    this.handleSignOut = this.handleSignOut.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleSignOut(event) {
    this.props.signout(this.props.history);
  }

  renderButton() {
    if (this.props.authenticated) {
      return <button onClick={this.handleSignOut}>Sign Out</button>;
    } else {
      return <h1>Blogify</h1>;
    }
  }
  render() {
    return (
      <nav className="navBar">
        <ul>
          <li><NavLink to="/" exact>Posts</NavLink></li>
          <li><NavLink to="/signin" exact>Sign In</NavLink></li>
          <li><NavLink to="/signup" exact>Sign Up</NavLink></li>
          <li><NavLink to="/posts/new">NewPost</NavLink></li>
        </ul>
        <div>{this.renderButton()}</div>
      </nav>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    signout: history => dispatch(signoutUser(history)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
