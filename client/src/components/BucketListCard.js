import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm"


function BucketListCard({ idea, onDeleteIdea, user, setUser }) {
  const [comments, setComments] = useState([]);

const { id, title, image } = idea;

useEffect(() => {
  fetch("/comments")
  .then((resp) => resp.json())
  .then((comments) => setComments(comments));
  }, []);

const handleDeleteClick = () => {
  fetch(`/ideas/${id}`, {
    method: "DELETE",
  });
  onDeleteIdea(idea)
};

const onAddComment = (newComment) => {
  setComments((comments) => [...comments, newComment]);
};



    return (
        <li className="card">
               <section className="details">
        <h4>{title}</h4>
      </section>
        <figure className="image">
          <img src={image} alt={title} />
          <ul>
        {idea.comments.map((comment) => (
          <li key={comment.id}>
            {comment.description}
          </li>
        ))}
      </ul>
        </figure>

        <footer className="extra">
          <div className="manage">
            <button onClick={handleDeleteClick}>
              Delete
            </button>
            <CommentForm onAddComment={onAddComment} ideaId={id} user={user} setUser={setUser} />
          </div>
        </footer>
      </li>
    )
}

export default BucketListCard;