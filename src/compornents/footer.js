import React from 'react';
import './style.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>&copy; 2024-{currentYear} HURTA</p>
        </footer>   
    )
}

export default Footer;