import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTitle, updateBody, savePost } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    newPostTitle: state.posts.newPostTitle,
    newPostBody: state.posts.newPostBody,
    user: state.scratch.user,
    // alias: state.posts.alias,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (value) => dispatch(updateTitle(value)),
    updateBody: (value) => dispatch(updateBody(value)),
    handleSubmit: (e, title, body, id) => {
      e.preventDefault();
      if (!title || !body) return;
      // if (!alias || !body) return;
      dispatch(savePost(title, body, id));
    },
  };
};

class PostForm extends Component {
  render() {
    return (
      <center className="PostForm">
        <form
          onSubmit={(e) =>
            this.props.handleSubmit(
              e,
              this.props.newPostTitle,
              this.props.newPostBody,
              this.props.user.id
            )
          }
        >
          <input
            placeholder="Add a title"
            onChange={(e) => this.props.updateTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Add a body"
            onChange={(e) => this.props.updateBody(e.target.value)}
          />
          <br />
          <button type="submit">Add Post</button>
        </form>
      </center>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
