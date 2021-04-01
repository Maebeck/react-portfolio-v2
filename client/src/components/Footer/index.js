import React from 'react';
import GitHub from '../../images/if_github_square_black_107109.png';
import LinkedIn from '../../images/if_linkedin_square_color_107091.png';
import ResumeImg from '../../images/resume-img.png';
import './footstyle.css';
import Resume from '../../resume/Resume.pdf';
function Footer () {
    return(
    <footer className="background-color-dark footer-div">
    <div class="container-lg p-responsive d-sm-flex flex-justify-between flex-items-center socialDiv">
    
            <a href="https://github.com/Maebeck" target='_blank'><img className="socialImg"  src= { GitHub } alt ="Github logo"></img></a>
            <a href="https://www.linkedin.com/in/corey-smith-5854ba1bb/" target='_blank'><img className="socialImg" height="38" src= { LinkedIn }  alt = "Linked logo"></img></a>
            <a href='Resume.pdf' src = { Resume } download><img className="socialImg" height="35" src= { ResumeImg } alt = "Basic Resume Img"></img></a>
        
    </div>
    {/* <p>&copy; 2020 Corey Smith</p> */}
    </footer>
    )
}

export default Footer;