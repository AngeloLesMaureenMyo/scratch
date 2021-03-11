import React from 'react';

export default function Thread({ title, body, datetime, feedPostID, styling, updateActiveThreadID }) {
   console.log('Im inside Thread component');
  

    return (
      <div className={`Post ${styling}`}>
      </div>
    );
  }
