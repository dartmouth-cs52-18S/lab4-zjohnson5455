// src/js/components/Form.js
// borrowing heavily again from https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import marked from 'marked';
import { fetchPost, updatePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onURLChange = this.onURLChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderURL = this.renderURL.bind(this);
    this.state = {
      isEditing: false,
      title: '',
      content: '',
      tags: '',
      cover_url: '',
    };
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  onTitleChange(event) {
    console.log('reached');
    this.setState({ title: event.target.value });
  }
  onContentChange(event) {
    console.log('reached');
    this.setState({ content: event.target.value });
  }
  onTagsChange(event) {
    console.log('reached');
    this.setState({ tags: event.target.value });
  }
  onURLChange(event) {
    console.log('reached');
    this.setState({ cover_url: event.target.value });
  }
  // https://codepen.io/gaearon/pen/xEmzGg?editors=0010
  handleEdit() {
    this.setState({
      isEditing: true, title: this.props.posts.post.title, content: this.props.posts.post.content, tags: this.props.posts.post.tags, cover_url: this.props.posts.post.cover_url,
    });
  }

  handleBlur() {
    this.setState({ isEditing: false });
    const fields = {
      title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.cover_url,
    };
    this.props.updatePost(this.props.match.params.postID, fields);
  }

  renderTitle() {
    if (this.state.isEditing) {
      return <input onChange={this.onTitleChange} value={this.state.title} type="text" />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: marked(this.props.posts.post.title || '') }} />;
    }
  }

  renderContent() {
    if (this.state.isEditing) {
      return <input onChange={this.onContentChange} value={this.state.content} type="text" />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: marked(this.props.posts.post.content || '') }} />;
    }
  }

  renderTags() {
    if (this.state.isEditing) {
      return <input onChange={this.onTagsChange} value={this.state.tags} type="text" />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: marked(this.props.posts.post.tags || '') }} />;
    }
  }

  renderURL() {
    if (this.state.isEditing) {
      return <input onChange={this.onURLChange} value={this.state.cover_url} type="text" />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: marked(`![img](${this.props.posts.post.cover_url})` || '') }} />;
    }
  }
  render() {
    this.props.fetchPost(this.props.match.params.postID);
    return (
      <div>
        <h2 onClick={() => this.handleEdit()} onBlur={() => this.handleBlur()}>{this.renderURL()}</h2>
        <h1 onClick={() => this.handleEdit()} onBlur={() => this.handleBlur()}>{this.renderTitle()}</h1>
        <h2 onClick={() => this.handleEdit()} onBlur={() => this.handleBlur()}>{this.renderTags()}</h2>
        <h2 onClick={() => this.handleEdit()} onBlur={() => this.handleBlur()}>{this.renderContent()}</h2>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    updatePost: (id, post) => dispatch(updatePost(id, post)),
  };
};

const mapStateToProps = state => ({
  posts: state.posts, // come back to this to verify correct indexing
  // state.itemsHasErrored,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
