import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div id="nav">
        <h1>David Harianto</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </div>
    );
}

export default Navbar;