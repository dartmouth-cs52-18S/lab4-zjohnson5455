import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { itemsFetchData, deletePost } from '../actions/index';
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3

class postList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.posts.all.length === 0) {
      return <p>You have no notes to display! Wait a few moments for connectivity or add some notes!!!</p>;
    }
    return (
      <ul className="postContainer">
        {this.props.posts.all.map(post => (
          <li key={post.id}>
            <div className="post">
              <button onClick={() => this.props.deletePost(post.id, this.props.history)}>Delete</button>
              <Link to={`/posts/${post.id}`}>Read More</Link>
              <div dangerouslySetInnerHTML={{ __html: marked(post.cover_url || '') }} />
              <h1>{post.title}</h1>
              <h2>{post.tags}</h2>
            </div>
          </li>
                ))}
      </ul>
    );
  }
}
// () => this.props.fetchPost(post.id)
const mapStateToProps = state => ({
  posts: state.posts, // come back to this to verify correct indexing
  // state.itemsHasErrored,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(itemsFetchData()),
    deletePost: (id, history) => dispatch(deletePost(id, history)),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(postList));
