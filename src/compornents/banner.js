import React from 'react';
import './style.css';
import bannerImage from '../img/amazon.jpg';

export const Banner = () => {
    return(
        <div className="banner">
            <a href="https://amzn.to/3DtylUW" target="_blank" rel="noopener noreferrer">
                <img src={bannerImage} alt="バナー_三体" />
            </a>
        </div>
    )
}

export default Banner;