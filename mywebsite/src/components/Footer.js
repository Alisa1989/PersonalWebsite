import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="Footer">
            <div className="links">
                <Link path to="/">Home</Link>
                <Link path to="/projects">Projects</Link>
                <Link path to="/resume">Resume</Link>
                <Link path to="/contactme">Contact Me</Link>
                <Link path to="/socialmedia">Social Media</Link>
            </div>

        </div>
    )
}

export default Footer