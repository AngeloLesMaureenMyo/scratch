import React from 'react';

export default function Post({ title, body, styling }) {
  console.log(styling);
  return (
    <div className={`Post ${styling}`}>
      <div className='TitleAndBody'>
        <h4>{title}:</h4>
        <p className='PostBody'>{body}</p>
      </div>
      <div className='ButtonsAndCounter'>
        <button type="button" className="voteButton" id="upvote" onClick={()=> {}}>up</button>
        <button type="button" className="voteButton" id="downvote" onClick={()=> {}}>down</button>
        <p className="votesCounter" id="votes">#of votes</p>
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

