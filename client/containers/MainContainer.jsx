import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainDisplay from './MainDisplay.jsx';

// passing state data to props
const mapStateToProps = (state) => {
  return {
    id: state.posts.id,
    uid: state.posts.uid,
    title: state.posts.title,
    body: state.posts.body,
  };
};

// IIFE : store action objects to props in order to dispatch
const mapDispatchToProps = (dispatch) => ({});

class MainContainer extends Component {
  // render the page
  render() {
    return (
      <div className="container">
        <div className="posts">
          {/* keywords search for strectch features */}
          {/* display title of the post(name of the post) */}
          {/* post thread */}
          <MainDisplay />
        </div>
      </div>
    );
  }
}

//exporting MainContainer component binding/connecting mapStateToProps and mapDispatchToProps data
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainContainer)
);
