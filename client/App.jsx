import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wrapper from './components/MainContainer.jsx';
// import Login from './components/Login.jsx';
// import Signup from './components/Signup.jsx';
import { connect } from 'react-redux';
const App = (props) => {
  return (
    <div className="router">
      <main>
        {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reacttraining.com/react-router/web/guides/quick-start
        */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Wrapper} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={Signup} /> */}
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};
export default App;
