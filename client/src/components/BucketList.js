import BucketListCard from "./BucketListCard";
import { useState } from "react";

 

function BucketList({ comments, ideas, onDeleteIdea }) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = ideas.filter((idea) => {
    return idea.title.toLowerCase().includes(searchQuery.toLowerCase());
  });




  const ideaItems = searchResults.map((idea) => {
    console.log(ideas)
    return (
      <BucketListCard
        key={idea.id}
        idea={idea}
        onDeleteIdea={onDeleteIdea}
        comments={comments}

      />
    );
  });

  const handleOnChange = (e) => setSearchQuery(e.target.value);

    return (
 <section>
      <h2>BucketList Ideas</h2>
      <br></br>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{ideaItems}</ul>
    </section>
  );
}

export default BucketList;