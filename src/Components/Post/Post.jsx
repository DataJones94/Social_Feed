import React, { useState } from 'react';

const Post = (props) => {
  const [isLiked, setIsLiked] = useState(props.status.isLiked);
  const [isDisliked, setIsDisliked] = useState(props.status.isDisliked);
  return (
    <li>
      <div className="border">
        <div>Name: {props.status.name}</div>
        <div>Status: {props.status.status1}</div>
        <div className="border">
          <div className="buttons">
            <button onClick={()=>{setIsLiked(!isLiked);setIsDisliked(false)}} className= {`button    ${isLiked?"liked": ""}`}>like</button>
            

            <button onClick={()=>{setIsDisliked(!isDisliked);setIsLiked(false)}} className={`button   ${isDisliked?"disliked": ""}`}>dislike</button>
            
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;
{
  /*Use props to pass down data from the CreatPostForm to Apps. 
    After using parentStatus on Apps.js use props.parentStatus */
}
