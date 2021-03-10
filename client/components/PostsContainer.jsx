import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/actions';
import Post from './Post.jsx';
import PostForm from './PostForm.jsx';
import Navbar from './Navbar.jsx';

const mapStateToProps = (state) => {
  //
  return { posts: state.posts, userId: state.scratch.user.id };
};

// const mapDispatchToProps = (dispatch) => {
//   //
//   return {
//     getPosts: () => actions.getPosts(),
//   };
// };

class PostsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPosts();
  }

  renderThread(feedPostID, alias) {
    // console.log(this.props.posts.activeThreadID)
    console.log(feedPostID)
    if (this.props.posts.activeThreadID === feedPostID) {
    return (
      // dummy ThreadContainer, to be replaced
      // <div>ThreadContainer</div>
      // <Post alias={alias} body={`I am a ThreadContainer placeholder. FeedPostID is ${feedPostID}`} />
      <ThreadContainer alias={alias} feedPostID={feedPostID}/>
    )}
  }

  renderPosts() {
    if (Array.isArray(this.props.posts.posts)) {
      return this.props.posts.posts.map((post, i) => {
        return(
        <div>
          <Post
          key={`Post ${i}`}
          alias={post.alias}
          body={post.body}
          feedPostID={post._id}
          datetime={post.createdat}
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

export default connect(mapStateToProps, { getPosts })(PostsContainer);
