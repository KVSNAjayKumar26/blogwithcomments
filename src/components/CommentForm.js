import React, { useState } from 'react'
import './CommentForm.scss';
const CommentForm = ({ addComment }) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user && text) {
            addComment({ user, text });
            setUser('');
            setText('');
        }
    };
  return (
    <form className='comment-form' onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Your name'
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
        />
        <textarea
        placeholder='Your Comment'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        ></textarea>
        <button type='submit'>Post Comment</button>
    </form>
  );
};

export default CommentForm;