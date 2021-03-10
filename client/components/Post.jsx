import React from 'react';

export default function Post({ title, body, datetime, feedPostID, styling, updateActiveThreadID }) {
  // console.log(styling);
  // to update to display how old (in minutes if less than a day) the posts are
  let date = datetime;
  return (
    <div className={`Post ${styling}`}>
      <h4>{title}:</h4>
      {/* <h4>{alias}</h4> */}
      <p>{body}</p>
      <time>{date}</time>
      <br></br>
      <button onClick={()=> updateActiveThreadID(feedPostID)}>Comment</button>
    </div>
  );
}
