import React, { useState } from "react";


function BucketListCard({ comments, idea, onDeleteIdea }) {

const { id, title, image } = idea;



const handleDeleteClick = () => {
  fetch(`/ideas/${id}`, {
    method: "DELETE",
  });
  onDeleteIdea(idea)
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
          </div>
        </footer>
      </li>
    )
}

export default BucketListCard;