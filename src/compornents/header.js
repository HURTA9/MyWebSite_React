import React from 'react';
import './style.css';

function Header(){
    return(
        <header>
            <h1>HURTAの楽曲まとめ</h1>
            <nav>
                <a href="index.html">Home</a>
                <a href="music.html">Music</a>
                <a href="blog.html">Blog</a>
                <a href="tool.html">Tool</a>
            </nav>
        </header>
    )
}

export default Header;