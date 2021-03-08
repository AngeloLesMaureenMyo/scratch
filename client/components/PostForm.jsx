import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTitle, updateBody, savePost } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    newPostTitle: state.posts.newPostTitle,
    newPostBody: state.posts.newPostBody,
    user: state.scratch.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (value) => dispatch(updateTitle(value)),
    updateBody: (value) => dispatch(updateBody(value)),
    handleSubmit: (e, title, body, id) => {
      e.preventDefault();
      dispatch(savePost(title, body, id));
    },
  };
};

class PostForm extends Component {
  render() {
    return (
      <div className="PostForm">
        <h1>PostForm</h1>
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
          <textarea
            placeholder="Add a body"
            onChange={(e) => this.props.updateBody(e.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
