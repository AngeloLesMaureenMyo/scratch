import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/actions';
import Post from './Post.jsx';
import PostForm from './PostForm.jsx';

const mapStateToProps = (state) => {
  //
  return { posts: state.posts };
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
          body={post.body}
          userId={post.user_id}
        />
      ));
    }
  }

  render() {
    return (
      <div>
        <a href="/auth/logout">Logout</a>
        {this.renderPosts()}
        <PostForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPosts })(PostsContainer);
