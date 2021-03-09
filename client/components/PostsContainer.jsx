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

  renderPosts() {
    if (Array.isArray(this.props.posts.posts)) {
      return this.props.posts.posts.map((post, i) => (
        <Post
          key={`Post ${i}`}
          title={post.title}
          body={post.body[301] ? post.body = post.body.slice(0, 300) : post.body}
          userId={post.user_id}
          styling={post.user_id === this.props.userId ? 'MyPost' : null}
        />
      ));
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
