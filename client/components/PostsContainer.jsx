import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, upVote, downVote } from '../actions/actions';
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
        // console.log('LINE 28 IN POSTS CONTAINER, POST.BODY: ', post.body);

        <Post
          upVoteFunc={this.props.upVote}
          downVoteFunc={this.props.downVote}
          currentUserId={this.props.userId}
          votes={post.votes}
          postId={post._id}
          key={`Post ${i}`}
          title={post.title}
          body={post.body[301] ? post.body = post.body.slice(0, 300) : post.body}
          // body={post.body}
          userId={post.user_id}
          styling={post.user_id === this.props.userId ? 'MyPost' : 'StandardPost'}
        />
      ))
    }
  }

  render() {
    return (
      <center>
        <Navbar />      
        <center className="PostsContainer">
          <div className='PostsOnly'>
            {this.renderPosts()}
          </div>

          <PostForm />

        </center>
      </center>
    );
  }
}

//not sure why to export functions but have added upVote

export default connect(mapStateToProps, { getPosts, upVote, downVote })(PostsContainer);
