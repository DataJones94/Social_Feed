
{/*imrs for the import React useState */}
import React, { useState } from 'react';


function App() {
{/*status = actual name of state variable.*/}
{/* setStatus = function responsible for updating statuses */}
{/*whatever you pass into useState function call that's going to be the intial value of our stateful variable
which we know it will have a collection of data. like an empty array [] (we'll use empty string for now)*/}

const [status, setStatus] = useState()
  

return (
    <div>
      <table>
        <thead>
          <tr> Name </tr>
        </thead>
      </table>
    <h3> status </h3>
    </div>
  );

  
}

export default App;
