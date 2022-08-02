import { useState } from "react";

function CommentForm({ onAddComment, ideaId, user }){
const [description, setDescription] = useState("");
// const [errors, setErrors] = useState([]);


function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      description: "",
      idea_id: ideaId,
      user_id: user,
    };
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) =>  r.json())
    .then((comment) => {
          setDescription("");
          onAddComment(comment);
        });
      }
    


    return (
    <form onSubmit={handleSubmit}>
    <div>
      <input
        type="text"
        id="description"
        placeholder="add comment"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
    );

}

export default CommentForm;