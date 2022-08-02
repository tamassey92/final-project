import React, { useState } from "react";

function BucketListForm({ onAddIdea }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...formData}),
        };

        fetch("/ideas", configObj)
        .then((resp) => resp.json())
      .then((idea) => {
        onAddIdea(idea);
        setFormData({
          title: "",
          image: "",
        });
      });
  };

    return (
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <h3>Add New BucketList Idea</h3>
  
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
  
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            value={formData.image}
          />
  
          <button type="submit">Add Idea</button>
        </form>
      </section>
    );
};

export default BucketListForm;