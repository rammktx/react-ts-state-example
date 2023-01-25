import * as React from 'react';
import './style.css';

export default function Comment(props) {
  console.log("comment");
  return <p>{props.body}</p>;
}
