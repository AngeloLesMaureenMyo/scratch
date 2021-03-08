import React from 'react';

export default function Post({ title, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
