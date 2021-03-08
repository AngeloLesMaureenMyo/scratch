import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/actions';
import Post from './Post.jsx';

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
    // make get request to /posts
    console.log(this.props.getPosts);
    console.log(this.props);

    this.props.getPosts();
  }

  renderPosts() {
    if (this.props.posts)
      return this.props.posts.posts.map((post, i) => (
        <Post key={`Post ${i}`} title={post.title} body={post.body} />
      ));
  }

  render() {
    console.log(this.props);
    // console.log(props.posts);
    return (
      <div>
        <h1>PostsContainer</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPosts })(PostsContainer);
