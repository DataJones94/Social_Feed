
import React, { useState } from 'react';


{/*Post is how you want it to look post is the child of CreatePostForm*/}

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [status1, setStatus1] = useState('');

    function handleSubmit(status){
        status.preventDefault();
        let newStatus = {
            name: name,
            status1: status1
        };
        console.log(newStatus)

    }



    return ( 
        <form onSubmit={handleSubmit}>
            <tr>
            <lable>Name</lable>
            <input type= "string" value={name} onChange={(status) => setName(status.target.value)}/>
            </tr>
            <label>Status</label>
            <input type="string" value={status1} rows ='5' onChange={(status) => setStatus1(status.target.value)}/>
            <button type ="submit" >Like</button>
            <button type ="submit" >Dislike</button> 

        </form>
     );
}
 
export default CreatePostForm;

 


{/*Use props to pass down data from the CreatPostForm to Apps to make the status on line 13 recognizable. 
After using parentStatus on Apps.js use props.parentStatus */}



