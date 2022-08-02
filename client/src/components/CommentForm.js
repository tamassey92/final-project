import { useState } from "react";

function CommentForm({ onAddComment, ideaId }){
    const [formData, setFormData] = useState({
        description: "",
        idea_id: ideaId,
        user_id: 10,
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) =>  r.json())
    .then((comment) => {
          setFormData({
            description: "",
            idea_id: ideaId,
            user_id: 10,
          });
          onAddComment(comment);
        });
      }
    


    return (
    <form autoComplete="off" onSubmit={handleSubmit}>
    <div>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="add comment"
        onChange={handleChange}
        value={formData.description}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
    );

}

export default CommentForm;