import React from 'react';
import GitHub from '../../images/if_github_square_black_107109.png';
import LinkedIn from '../../images/if_linkedin_square_color_107091.png';
import ResumeImg from '../../images/resume-img.png';
import './footstyle.css';
function Footer () {
    return(
    <footer className="background-color-dark">
    <div class="container-lg p-responsive d-sm-flex flex-justify-between flex-items-center socialDiv">
    
            <img className="socialImg"  src= { GitHub } href="https://github.com/Maebeck" alt ="Github logo"></img>
            <img className="socialImg" height="38" src= { LinkedIn } href="https://www.linkedin.com/in/corey-smith-5854ba1bb/" alt = "Linked logo"></img>
            <img className="socialImg" height="35" src= { ResumeImg } alt = "Basic Resume Img"></img>
        
    </div>
    <p>&copy; 2020 Corey Smith</p>
    </footer>
    )
}

export default Footer;