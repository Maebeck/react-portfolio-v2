import React from 'react';
import Me from '../../images/me.jpg';
import './about.css';

function AboutMe () {
    return(
    <main class="container">
            <section class="about-me">
                <header>
                    <h1>About Me</h1>
                </header>
                <div className = 'me-desc row'>
                <div class="profile-thumb">
                    <img src={ Me } className = "profilePic" alt="Me and my girlfriend"></img>
                </div>
                <p className='me-desc'>
                    Hello! My name is Corey Smith. I'm an aspiring Full Stack Web Developer.
                    <h2>Some things about me:</h2>
                    <p>Gamer - Builder - All Things PC</p>
                    <p>Skiier - Weight Lifter - Average Chef</p>
                </p>
                <div>
                </div>
                {/* <header>
                    <h1>Check out my Socials!</h1>
                </header>
                <ul>
                    <li href='https://www.linkedin.com/in/corey-smith-5854ba1bb/'>Linked-In</li>
                    <li href=''>GitHub</li>
                    <li href=''>Resume</li>
                </ul>*/}
                </div>
            </section>
        </main>
    )
};


export default AboutMe;