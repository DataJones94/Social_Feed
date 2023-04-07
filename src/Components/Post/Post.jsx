import React, { useState } from 'react';


{/*Post is how you want it to look */}

const Post = (props) => {
    const [name, setName] = useState('');
    const [status1, setStatus1] = useState('');



    // return ( 
    //     <form>
    //         <tr>
    //         <lable>Name</lable>
    //         <input type= "string" value={name} onChange={(status) => setName(status.target.value)}/>
    //         </tr>
    //         <label>Status</label>
    //         <input type="string" value={status1} rows ='5' onChange={(status) => setStatus1(status.target.value)}/>
    //     </form>
    //  );
}
 
export default Post;