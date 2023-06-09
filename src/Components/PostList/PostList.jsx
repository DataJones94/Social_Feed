import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <ol>
        {props.parentStatus.map(status => <Post status = {status} /> )}
    
    </ol>
  
  );
};

export default PostList;

{
  /*Create the feed where all your posts will be displayed in your app. 
All posts should be passed into this component using props. 
Then utilize the "map" higher order array method to map each post to it's own Post component */
}
