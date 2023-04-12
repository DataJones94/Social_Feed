
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
        props.addNewStatus(newStatus)

    }


{/*the input boxes on CreatPostForm- I get an error saying the status is not iterable. The input 
boxes on the Post do not give me an error. I'm not sure if I need these inboxes because of
the status.target.value properties. */}
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
            {/* <tr>
            <lable>Name</lable>
            <input type= "string" value={name} onChange={(status) => setName(status.target.value)}/>
            </tr>
            <label>Status</label>
            <input type="string" value={status1} rows ='5' onChange={(status) => setStatus1(status.target.value)}/>
             */}
            {/* <button type= 'submit'>Create</button> */}
            
            {/* <div className='buttons'>
            <button type ="submit" >Like</button>
            <button type ="submit" >Dislike</button> 
            </div> */}

        </form>
     );
}
 
export default CreatePostForm;

 





