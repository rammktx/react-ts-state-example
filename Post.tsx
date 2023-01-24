import * as React from 'react';
import './style.css';

import { useState } from 'react';

import Comment from './Comment';
import Author from './Author';

export default function Post(props) {
  const [body, setBody] = useState('Check out this body property!');

  return (
    <div className="center">
      <h1>{props.post.title}</h1>
      {props.allAuthors.map((author) => (
        <Author body={author} />
      ))}
      <p>{body}</p>
      <h3>Comments:</h3>

      {props.post.comments.map((comment) => (
        <Comment body={comment} />
      ))}
      <input
        type="text"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
    </div>
  );
}
