import React, { useState } from 'react'

const CommentSection = () => {
    const [comments, setComments] = useState([
        {
            "id": 1,
            "first_name": "Nial",
            "text": "Implemented scalable alliance"
          }, {
            "id": 2,
            "first_name": "Adelbert",
            "text": "Open-source systemic strategy"
          }, {
            "id": 3,
            "first_name": "Shoshana",
            "text": "Grass-roots client-driven adapter"
          }, {
            "id": 4,
            "first_name": "Wynnie",
            "text": "Cross-platform 24 hour paradigm"
          }, {
            "id": 5,
            "first_name": "Salomo",
            "text": "Balanced reciprocal solution"
          }, {
            "id": 6,
            "first_name": "Yank",
            "text": "Organic coherent hierarchy"
          }, {
            "id": 7,
            "first_name": "Jackquelin",
            "text": "Re-contextualized responsive task-force"
          }, {
            "id": 8,
            "first_name": "Harald",
            "text": "Diverse zero tolerance groupware"
          }, {
            "id": 9,
            "first_name": "Sarge",
            "text": "De-engineered holistic approach"
          }, {
            "id": 10,
            "first_name": "Bev",
            "text": "Re-engineered real-time model"
          }
    ]);
  return (
    <div className='comment-section'>
        <h2>Comments</h2>
        {comments.map(comment => (
            <div className='comment' key={comment.id}>
                <p><strong>{comment.user}</strong></p>
                <p>{comment.text}</p>
                </div>
        ))}
    </div>
  );
};

export default CommentSection;