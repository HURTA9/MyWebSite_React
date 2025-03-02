import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <nav>
                <div>
                    <Link to = "/">Home</Link>
                    <Link to = "/music">Music</Link>
                    <Link to = "/blog">Blog</Link>
                    <Link to = "/contact">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;