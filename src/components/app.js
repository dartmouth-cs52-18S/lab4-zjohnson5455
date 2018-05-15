import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from '../containers/postList';
import NewPost from '../components/newPost';
import Post from '../components/post';
import SignIn from '../components/signIn';
import SignUp from '../components/signUp';
import Nav from '../components/nav';
import requireAuth from '../containers/requireAuth';


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/posts/new" component={requireAuth(NewPost)} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
