import React, { useState, useEffect } from 'react';
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [text, setText] = useState("David Harianto");

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 576) {
            setText("DH");
        }
        else {
            setText("David Harianto")
        }
    }, [windowWidth]);


    return (
        <div id="nav">
        <h1><Link to="/">{text}</Link></h1>
        <ul>
            <li id="home">
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