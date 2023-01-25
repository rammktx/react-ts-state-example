import * as React from 'react';
import './style.css';

import { useState, useEffect } from 'react';

import Comment from './Comment';
import Author from './Author';

export default function Post(props) {
  let [body, setBody] = useState('props.post.body');

  console.log('body:' + body);

  const now = new Date().getTime();

  const changeHandler = (event) => {
    setBody(event.target.value);
    console.log('after:' + body);
  };

  useEffect(() => console.log('useeffect'), [changeHandler]);

  return (
    <div className="center">
      <h1>{props.post.title}</h1>
      {props.allAuthors.map((author) => (
        <Author body={author} />
      ))}
      <p>{body}</p>
      <p>{now}</p>
      <h3>Comments:</h3>

      {props.post.comments.map((comment) => (
        <Comment body={comment} />
      ))}
      <input type="text" onInput={(event) => changeHandler(event)} />
    </div>
  );
}
