import React,{useState,useEffect} from "react";
import axios from "axios";

import './Send.css';
function Delete(){
    const[id,setId]=useState("");
    function sendPost(e){
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(res=>alert(res.status))
       

    }
    return(
        <div className="send">
            <h2>Delete a post</h2>
            <form onSubmit= {sendPost}>
                <label htmlFor="id">ID</label>
                <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
                <input type="submit" value="Delete Post" />
            </form>
        </div>
    );
}
export default Delete;