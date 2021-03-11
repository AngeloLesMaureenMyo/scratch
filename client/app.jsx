import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Wrapper from './containers/MainContainer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import PostsContainer from './containers/PostsContainer.jsx';
import FeedLink from './components/FeedLink.jsx';

const mapStateToProps = (state) => ({
  user: state.scratch.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (user) => {
      dispatch({ type: 'AUTHENTICATE', payload: user });
    },
  };
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(props);
    fetch('/auth/check', {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          const { authenticate } = this.props;

          authenticate(data);
          // this.props.history.push('/posts');
        } else {
          // this.props.history.push('/signup');
        }
      })
      .catch((err) => console.log('Login fetch /auth/login: ERROR: ', err));
  }

  render() {
    console.log('The current user is :', this.props.user);
    if (this.props.user !== null) {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={PostsContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    return (
      <div className="router">
        <BrowserRouter>
          <Switch>
            {/* <Route path="/main" exact component={Home} /> */}
            <Route path="/feed" exact component={PostsContainer} />
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
