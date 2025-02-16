import React from 'react';
import './style.css';
import bannerImage from '../img/amazon.jpg';

export const Banner = () => {
    return(
        <div className="banner">
            <a href="https://www.amazon.co.jp/" target="_blank" rel="noopener noreferrer">
                <img src={bannerImage} alt="バナー_三体" />
            </a>
        </div>
    )
}

export default Banner;