import React, { useState } from 'react'
import BlogPost from './components/BlogPost';
import CommentForm from './components/CommentForm';
import CommentSection from './components/CommentSection';
import './App.scss';
const App = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, { ...comment, id: comments.length + 1 }]);
  } 
  return (
    <div className='app'>
      <BlogPost />
      <CommentForm addComment={addComment} />
      <CommentSection comments={comments} />
    </div>
  )
}

export default App