import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="NavBar">
            <div className="title">
                <h1>Alexandre Steinhauslin Web Developer</h1>
            </div>
            <div className="links">
                <Link path to="/">Home</Link>
                <Link path to="/projects">Projects</Link>
                <Link path to="/resume">Resume</Link>
                <Link path to="/contactme">Contact Me</Link>
            </div>

        </div>
    )
}

export default NavBar