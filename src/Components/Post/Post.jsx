const Post = (props) => {
  return (
    <li>
      <div className="border">
      <div>Name:  {props.status.name}</div>
      <div>Status:  {props.status.status1}</div>
      <div className="border">


      <div className="buttons">
        <button type="submit">Like</button>
        
        <button type="submit">Dislike</button>
      </div>
      </div>
      </div>
    </li>
  );
};

export default Post;
{
  /*Use props to pass down data from the CreatPostForm to Apps to make the status on line 13 recognizable. 
    After using parentStatus on Apps.js use props.parentStatus */
}
