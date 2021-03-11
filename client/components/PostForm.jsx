import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTitle, updateBody, savePost } from '../actions/actions';
import Filter from 'bad-words';
// import { socket } from 'socket.io';

const filter = new Filter();

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
    handleSubmit: (e, title, body, id, username) => {
      e.preventDefault();
      e.target.reset();
      if (!title || !body) return;

      dispatch(savePost(filter.clean(title), filter.clean(body), id, username));
    },
  };
};

class PostForm extends Component {
  render() {
    return (
      
      <center className="PostForm">
        <form
          onSubmit={(e) => {
            var socket = io();
            this.props.handleSubmit(
              e,
              this.props.newPostTitle,
              this.props.newPostBody,
              this.props.user.id,
              this.props.user.username
            )
            socket.emit('new post', `emitting from PostForm: ${this.props.newPostBody}`);
          }
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
