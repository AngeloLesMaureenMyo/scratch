import React from 'react';


function renderThread(feedPostID) {
  console.log('renderThread fired')
  return(
    <div>
      {feedPostID}
    </div>
  )
}

export default function Post({ alias, body, datetime, feedPostID, styling }) {
  // console.log(styling);
  // to update to display how old (in minutes if less than a day) the posts are
  let date = datetime;
  return (
    <div className={`Post ${styling}`}>
      <h4>{alias}:</h4>
      <p>{body}</p>
      <time>{date}</time>
      <br></br>
      <button onClick={()=> renderThread(feedPostID)}>Comment</button>
    </div>
  );
}
