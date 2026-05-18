import React,{useState,useEffect} from "react";
import axios from "axios";

import './Send.css';
function Update(){
    const [userId,setuserId]=useState("");
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[id,setId]=useState("");
    function sendPost(e){
        e.preventDefault();
        const formdata={"userId":userId,"title":title,"body":body,"id":id};
        axios.put("https://jsonplaceholder.typicode.com/posts/"+id,formdata)
        .then(res=>alert(res.status))
       

    }
    return(
        <div className="send">
            <h2>Update a post</h2>
            <form onSubmit= {sendPost}>
                <label htmlFor="id">ID</label>
                <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
                <label htmlFor="userId">User ID</label>
                <input type="number" value={userId} onChange={(e)=>setuserId(e.target.value)}/>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="body">Body</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)}/>
                <input type="submit" value="Update Post" />
            </form>
        </div>
    );
}
export default Update;