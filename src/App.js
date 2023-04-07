import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm'
import Post from './Components/Post/Post';


{/*imrs for the import React useState */}


function App() {
{/*status = actual name of state variable.*/}
{/* setStatus = function responsible for updating statuses */}
{/*whatever you pass into useState function call that's going to be the intial value of our stateful variable
which we know it will have a collection of data. like an empty array [] (we'll use empty string for now)*/}

const [status, setStatus] = useState([{name: "Chicken Little", status1: "Every day is a new day!"},{name: "Elsa", status1: "Let it go."}])
  

return (
    <div>
      <CreatePostForm parentStatus={status} /> 
      <Post />
    

    
    </div>
  );

  
}

export default App;


  {/*use an attribute parentStatus={status} to help pass down the props data */}