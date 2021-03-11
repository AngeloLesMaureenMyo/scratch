import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateThread, saveThread } from '../actions/actions';

//Thread Form - the general standard for users to enter comments/threads to posts AND to reply to other replies

const mapStateToProps = (state) => {
  return {
    newThreadBody: state.threads.newThreadBody,
     user: state.scratch.user,
     alias: state.posts.alias,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateTitle: (value) => dispatch(updateTitle(value)),
    updateThread: (value) => dispatch(updateThread(value)),
    handleSubmit: (e,alias, body, id, parent_id) => {
      e.preventDefault();
     if (!body) return console.log('No body');
     console.log('Alias is', alias)
      dispatch(saveThread(alias, body, id, parent_id));
    },
  };
};

class ThreadForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('The current state is', this.props)
    
    return (
      <center className="ThreadForm">
        <form
          onSubmit={(e) =>
            this.props.handleSubmit(
              e,
              this.props.alias,
              this.props.newThreadBody,
              this.props.user.id,
              this.props.parent_id
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
