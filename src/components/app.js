import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

const Posts = (props) => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

const NewPost = (props) => {
  return (
    <div>
      <h1>New Post</h1>
    </div>
  );
};

const Post = (props) => {
  return (
    <div>
      <h1>View Post</h1>
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Posts</NavLink></li>
        <li><NavLink to="/posts/new">NewPost</NavLink></li>
        <li><NavLink to="/posts/id1">Post id1</NavLink></li>
        <li><NavLink to="/posts/id2">Post id2</NavLink></li>
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
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
