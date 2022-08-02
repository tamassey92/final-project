import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar"
import BucketList from "./components/BucketList"
import BucketListForm from "./components/BucketListForm"
import Login from "./components/Login"


function App() {
  const [ideas, setIdeas] = useState([]);



  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });

    fetch('/ideas')
    .then(res => res.json())
    .then(setIdeas);

  },[]);


useEffect(() => {
fetch("/ideas")
.then((resp) => resp.json())
.then((ideas) => setIdeas(ideas));
}, []);


const onAddIdea = (newIdea) => {
  setIdeas((ideas) => [...ideas, newIdea]);
};




const onDeleteIdea = (deletedIdea) => {
  const updatedIdeas = ideas.filter(
    (idea) => idea.id !== deletedIdea.id
  );
  setIdeas(updatedIdeas);
};



if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;


  return (
    <div className="App">
           <header>
        <h1>The Bucket List</h1>
        </header>
          <NavBar />
<Routes>
{/* <Route path="/" element={<NavBar />} /> */}
  <Route path="/ideas" element={<BucketList ideas={ideas} onDeleteIdea={onDeleteIdea}/>} user={user}/>
  <Route path="/ideas/new" element={<BucketListForm onAddIdea={onAddIdea}/>} />
  <Route path="/login" element={<Login />} />
</Routes>
    </div>
  );
}

export default App;
