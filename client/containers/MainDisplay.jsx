import React from 'react';
import { connect } from 'react-redux';

// passing state data to props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    title: state.allPosts.title,
    body: state.allPosts.body,
    userName: state.allPosts.userName,
    // numberOfcomments: this.numberOfcomments,
    createdAt: state.allPosts.createdAt,
  };
};

// IIFE : store action objects to props in order to dispatch
const mapDispatchToProps = (dispatch) => ({});

const MainDisplay = (props) => (
  // create display here
  <div className="innerBox">
    <h1 className="title">Welcome back {props.userName}</h1>
    <h2 id="post">{props.title}</h2>
    <div className="comments">
      <p>{props.body}</p>
    </div>
    <input
      className="commentBox"
      placeholder="Please Type your comments here!"
      // onSubmit={}
      size={150}
      // pattern={censoredWords}
    ></input>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
