import React from "react"
import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <h1>My App</h1>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/send">Send</Link>
                <Link to="/update">Update</Link>
                <Link to="/delete">Delete</Link>
            </div>
        </div>
    );
}

export default Navbar;
               