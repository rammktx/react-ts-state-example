import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Post from './Post';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const authors = ['Stealthy Stegosaurus', 'Tiny T-Rex', 'Ivory Iguanodon']
const post = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosaurus',
  body: 'Check out this body property!',
  comments: ['First!', 'Great post', 'Hire this author now!']
};
root.render(
    <Post post={post} allAuthors={authors}/>
);
