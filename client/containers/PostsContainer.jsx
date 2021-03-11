import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, updateActiveThreadID } from '../actions/actions';
import Post from '../components/Post.jsx';
import PostForm from '../components/PostForm.jsx';
import Navbar from '../components/Navbar.jsx';
import ThreadsContainer from '../containers/ThreadsContainer.jsx';

const mapStateToProps = (state) => {
  //
  return { posts: state.posts, userId: state.scratch.user.id };
};

const mapDispatchToProps = {
  getPosts,
  updateActiveThreadID
};

class PostsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPosts();
  }

  renderThread(feedPostID, alias) {
    if (this.props.posts.activeThreadID === feedPostID) {
    return (
      // dummy ThreadContainer, to be replaced
      // <div>ThreadContainer</div>
      //<ThreadsContainer/>
      // uncomment below when ThreadContainer is merged, alias feature not implemented yet
      <ThreadsContainer alias={alias} feedPostID={feedPostID}/>
    )}
  }

  renderPosts() {
    if (Array.isArray(this.props.posts.posts)) {
      return this.props.posts.posts.map((post, i) => {
        return(
        <div>
          <Post
          updateActiveThreadID={this.props.updateActiveThreadID}
          key={`Post ${i}`}
          alias={post.alias}
          body={post.body}
          feedPostID={post._id}
          dateTime={post.createdat}
          userId={post.user_id}
          styling={post.user_id === this.props.userId ? 'MyPost' : null}
          />
 
          {this.renderThread(post._id, post.alias)}
        </div>
      )});
    }
  }

  render() {
    return (
      <center>
        <Navbar />
        <center className="PostsContainer">
          {this.renderPosts()}
          <PostForm />
        </center>
      </center>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);