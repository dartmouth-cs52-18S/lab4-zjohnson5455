import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  const mapStateToProps = state => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  class requireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  return connect(mapStateToProps, null)(requireAuth);
}
