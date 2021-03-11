import React from 'react';

export default function Thread({ alias, body, datetime, feedPostID, styling}) {
   console.log('Im inside Thread component');
  

    return (
      <div className={`Post ${styling}`}>
          <h9>{alias}</h9>
          <p>{body}</p>
          <span>{time}</span>
      </div>
    );
  }
