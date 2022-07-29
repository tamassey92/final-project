// import { useState } from "react";


function BucketListCard({ idea, onDeleteIdea }) {
const { id, title, image } = idea;

// const [likeCount, setLikeCount] = useState(0);

// const handleLike = (likeCount) => setLikeCount(likeCount + 1);


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
          {/* <button onClick={handleLike} className="claps">
            Like{likeCount}
          </button> */}
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