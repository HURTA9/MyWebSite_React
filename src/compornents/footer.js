import React from 'react';
import './style.css';

function Footer(){
    return(
        <footer>
            <p>&copy; 2024-
                <script
                    type="text/javascript">myDate = new Date(); myYear = myDate.getFullYear(); document.write(myYear);</script>
                HURTA
            </p>
        </footer>   
    )
}

export default Footer;