import React from 'react';

export default function Post({ title, body, styling, votes, postId, userId, upVoteFunc, downVoteFunc, currentUserId }) {
  //console.log(styling);
  return (
    <div className={`Post ${styling}`}>
      <div className='TitleAndBody'>
        <h4>{title}</h4>
        <p className='PostBody'>{body}</p>
      </div>
      <div className='ButtonsAndCounter'>
        <div className='ButtonsContainer'>
          <button 
          type="button" 
          className="upVoteButton" 
          id="upvote" 
          onClick={(e) => { 
            e.preventDefault(); 
            upVoteFunc(votes, postId, userId, currentUserId)
          }
            }>🐃</button>
          <button 
          type="button" 
          className="downVoteButton" 
          id="downvote" 
          onClick={(e) => {
            e.preventDefault();
            downVoteFunc(votes, postId, userId, currentUserId)
          }
            }>💥</button>
        </div>
        <div className="votesCounter" id="votes">{votes} Yaks</div>
      </div>
    </div>
    
  );
}

//create upvote/downvote button for each post
//display total upvote/downvote for each post
//total should initiated at 0/increment for upvote/decrement for downvote

//upvotes and downvots should persist after logout
//function to handle clicks

//create json file to store upvotes and downvotes to store post upvote and downvote

