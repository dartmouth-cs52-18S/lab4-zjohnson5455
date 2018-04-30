import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import PostList from '../containers/postList';
import NewPost from '../components/newPost';

const Post = (props) => {
  return (
    <div>
      <h1>View Post</h1>
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav className="navBar">
      <ul>
        <li><NavLink to="/" exact>Posts</NavLink></li>
        <li><NavLink to="/posts/new">NewPost</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
