import React from 'react';

const timestamp = (psqlDate) => {
  const postTime = new Date(psqlDate).getTime()
  const currentTime = new Date().getTime()

  // 300 minutes is added to reconcile the 5 hour timezone difference resulting from PSQL's timestamp without timezone format 
  let differenceInMin = (currentTime-postTime)/1000/60+300
  // console.log('postTime:', postTime)
  // console.log('currentTime:', currentTime)
  // console.log('differenceInMin:', differenceInMin)  
  if (differenceInMin < 1) {
    return "1m"
  } else if (differenceInMin < 60) {
    let minute = Math.floor(differenceInMin)
    return `${minute}m`
  } else if (differenceInMin < 1440) {
    let hour = Math.floor(differenceInMin/60)
    return `${hour}h`
  } else if (differenceInMin < 10080) {
    let day = Math.floor(differenceInMin/1440)
    return  `${day}d`
  } else if (differenceInMin < 43800) {
    let week = Math.floor(differenceInMin/10080)
    return `${week}w`
  } else if (differenceInMin < 525600) {
    let month = Math.floor(differenceInMin/43800)
    return `${month}m`
  } else {
    let year = Math.floor(differenceInMin/525600)
    return `${year}y`
  }
}


export default function Post({ alias, body, dateTime, feedPostID, styling, updateActiveThreadID }) {
  // console.log(styling);
  // to update to display how old (in minutes if less than a day) the posts are
  let time = timestamp(dateTime);
  return (
    <div className={`Post ${styling}`}>
      <h4>{alias}</h4>
      <p>{body}</p>
      <span>{time}</span>
      <br></br>
      <button onClick={()=> updateActiveThreadID(feedPostID)}>Comment</button>
    </div>
  );
}
