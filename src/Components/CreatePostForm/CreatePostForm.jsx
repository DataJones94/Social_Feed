
import React, { useState } from 'react';


{/*Post is how you want it to look post is the child of CreatePostForm*/}


const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [status1, setStatus1] = useState('');

    function handleSubmit(status){
        status.preventDefault();
        let newStatus = {
            name: name,
            status1: status1,
            isLiked: false,
            isDisliked: false,
        };
        console.log(newStatus)
        props.addNewStatus(newStatus)

    }



    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for ="usr">Name</label>
                {/* <input type ="text" className="form-control"></input> */}
                <input type= "string" value={name} onChange={(event) => setName(event.target.value)}/>
            </div> 
            <div className="form-group">
                <label for ="usr">Status</label>
                {/* <input type ="text" className="form-control"></input> */}
                <input type= "string" value={status1} onChange={(status) => setStatus1(status.target.value)}/>
                <button type= 'submit'>Create</button>


            </div> 

        </form>
     );
}
 
export default CreatePostForm;

 





