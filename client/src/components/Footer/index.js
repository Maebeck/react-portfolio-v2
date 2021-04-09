import React from 'react';
import './footstyle.css';
import Resume from '../../resume/Resume.pdf';
function Footer () {
    return(
    <footer className="background-color-dark footer-div">
    <div class="container-lg p-responsive d-sm-flex flex-justify-between flex-items-center socialDiv">
    
            <a href="https://github.com/Maebeck" target='_blank'>GitHub</a>
            <a href="https://www.linkedin.com/in/corey-smith-5854ba1bb/" target='_blank'>LinkedIn</a>
            <a href='Resume.pdf' src = { Resume } download>Check out my Resume</a>
        
    </div>
    {/* <p>&copy; 2020 Corey Smith</p> */}
    </footer>
    )
}

export default Footer;