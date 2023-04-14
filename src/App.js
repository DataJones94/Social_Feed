import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Post from "./Components/Post/Post";
import PostList from "./Components/PostList/PostList";
import NavBar from "./Components/NavBar/NavBar";
import './index.css'
import Button from "./Components/Button.jsx";

{
  /*imrs for the import React useState */
}

function App() {
  {
    /*status = actual name of state variable. entry from the weight tracker tutorial = status*/
  }
  {
    /* setStatus = function responsible for updating statuses */
  }
  {
    /*whatever you pass into useState function call that's going to be the intial value of our stateful variable
which we know it will have a collection of data. like an empty array [] (we'll use empty string for now)*/
  }

  {
    /*...status === ...entries from weight tracker. Don't know how to make it plural. */
  }

  const [status, setStatus] = useState([
    { name: "Chicken Little", status1: "Every day is a new day!" },
    { name: "Elsa", status1: "Let it go." },
  ]);

  function addNewStatus(newStatus) {
    let tempStatus = [...status, newStatus];
    setStatus(tempStatus);
  }
  return (
    <div>
      <div className="nav">
      <div className="font">
      <NavBar/>
      </div> 
      </div> 
      <h1>Create a Post</h1>

      <div className="font">
      <div className="border-box">  

      <CreatePostForm addNewStatus={addNewStatus} />
      </div>

      </div>

      <div className="border">
      <PostList parentStatus={status}/>
      <Button message="Liked"/>
      </div>
    

    </div>
  );
}

export default App;

{
  /*use an attribute parentStatus={status} to help pass down the props data */
}
