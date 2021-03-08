import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wrapper from './containers/MainContainer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import PostsContainer from './components/PostsContainer.jsx';

const mapStateToProps = (state) => ({
  isAuthenticated: state.scratch.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: () => {
      dispatch({ type: 'AUTHENTICATE', isAuthenticated: isAuthenticated });
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
          console.log(data);
          const { isAuthenticated } = this.props;
          isAuthenticated(true);
          history.push('/posts');
        } else {
          history.push('/signup');
        }
      })
      .catch((err) => console.log('Login fetch /auth/login: ERROR: ', err));
  }

  render() {
    // return (
    //   <div className="router">
    //     <main>
    //       {/*
    //           NOTE: The syntax below is for React-Router
    //             - A helpful library for routing with a React app.
    //             You can learn more about this at:
    //             https://reacttraining.com/react-router/web/guides/quick-start
    //       */}
    //       <BrowserRouter>
    //         <Switch>
    //           <Route
    //             exact
    //             path="/"
    //             component={Wrapper}
    //           />
    //       </BrowserRouter>
    //     </main>
    //   </div>

    return (
      <div className="router">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </BrowserRouter>
        <PostsContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
