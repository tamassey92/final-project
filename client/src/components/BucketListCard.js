import { useState } from "react";
// import { Link } from 'react-router-dom'

function BucketListCard({ idea, onDeleteIdea }) {
const { id, title, image, category } = idea;

const [likeCount, setLikeCount] = useState(0);

const handleLike = (likeCount) => setLikeCount(likeCount + 1);

const handleDeleteClick = () => {
  fetch(`http://localhost:4000/ideas/${id}`, {
    method: "DELETE",
  });
  onDeleteIdea(idea)
    .then((resp) => resp.json())
    .then(onDeleteIdea(idea));
};
    return (
        <li className="card">
        <figure className="image">
          <img src={image} alt={title} />
          <button onClick={handleLike} className="claps">
            Like{likeCount}
          </button>
        </figure>
  
        <footer className="extra">
          <span className="badge blue">Category {category}</span>
          <div className="manage">
            {/* <Link className="button" to={`/ideas/${id}/edit`} >
              Edit
            </Link> */}
            <button onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </footer>
      </li>
    )
}

export default BucketListCard;