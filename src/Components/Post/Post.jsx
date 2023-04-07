
const Post = (props) => {
    return ( 
        <form>
            <div className="form-group">
                <label for ="usr">Name</label>
                <input type ="text" className="form-control"></input>
            </div> 
            <div className="form-group">
                <label for ="usr">Status</label>
                <input type ="text" className="form-control"></input>
                <button type= 'submit'>Create</button>

            </div> 
            <button type ="Button" >Like</button>
            <button type ="Button" >Dislike</button>    
            <tbody>
                {props.parentStatus.map((status) =>{
                  return(
                <tr>
                    <td>{status.name} </td>
                    <td>{status.status1}</td>
                </tr>
                );
            })}
            </tbody>
                
        </form>
     );
}
 
export default Post;