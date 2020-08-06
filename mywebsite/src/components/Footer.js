import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="Footer">
            <div>
                <a href= "https://www.instagram.com/ale.x.89/">
                 <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                </a>
                <a href= "https://www.linkedin.com/in/alexandre-steinhauslin/">
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                </a>
                <a href= "https://github.com/Alisa1989">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                </a>
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

export default Footer