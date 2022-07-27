import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar"
import BucketList from "./components/BucketList"
import BucketListForm from "./components/BucketListForm"
import Home from "./components/Home"
// import Category from "./components/Category"

function App() {
  const [ideas, setIdeas] = useState([]);

useEffect(() => {
fetch("http://localhost:3000/ideas")
.then((resp) => resp.json())
.then((ideas) => setIdeas(ideas));
}, []);

const onAddIdea = (newIdea) => {
  setIdeas((ideas) => [...ideas, newIdea]);
};

// const onUpdateIdea = (updatedIdea) => {
//   const updatedIdeas = ideas.map((originalIdea) => {
//     if (updatedIdea.id === originalIdea.id) {
//       return updatedIdea;
//     } else {
//       return originalIdea;
//     }
//   });
//   setIdeas(updatedIdeas);
// };

const onDeleteIdea = (deletedIdea) => {
  const updatedIdeas = ideas.filter(
    (idea) => idea.id !== deletedIdea.id
  );
  setIdeas(updatedIdeas);
};


  return (
    <div className="App">
          <h1 className="branding">
            Build Your BucketList
          </h1>
<Routes>
  <Route exact path="/" element={<NavBar />}>
  <Route path="/ideas" element={<BucketList ideas={ideas} onDeleteIdea={onDeleteIdea}/>} />
  <Route path="/ideas/new" element={<BucketListForm onAddIdea={onAddIdea}/>} />
  {/* <Route path ="/category" element={<Category />} /> */}
  </Route>
  <Route path="/" element={<Home />} />
</Routes>
    </div>
  );
}

export default App;
