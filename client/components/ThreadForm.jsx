import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateThread, saveThread } from '../actions/actions';

//Thread Form - the general standard for users to enter comments/threads to posts AND to reply to other replies

const mapStateToProps = (state) => {
  return {
    newThreadBody: state.posts.newThreadBody,
     user: state.scratch.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateTitle: (value) => dispatch(updateTitle(value)),
    updateThread: (value) => dispatch(updateThread(value)),
    handleSubmit: (e, body, id, feedPostId) => {
      e.preventDefault();
      e.persist();
      console.log('e is', e)
      console.log('Body is', body)
      console.log('The $', e.target)
      console.log('Target val', e.target.value)
    //   if (!body) return console.log('No body');
      dispatch(saveThread(body, id, feedPostId));
    },
  };
};

class ThreadForm extends Component {
  render() {
    return (
      <center className="ThreadForm">
        <form
          onSubmit={(e) =>
            this.props.handleSubmit(
              e,
              this.props.newThreadBody,
              this.props.user.id,
              this.props.feedPostId
            )
          }
        >
          <textarea
            placeholder="Add a reply"
            onChange={(e) => this.props.updateThread(e.target.value)}
          />
          <br />
          <button type="submit">Add comment</button>
        </form>
      </center>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
