import React from 'react';
import Me from '../../images/me.jpg';

function AboutMe () {
    return(
    <main class="container">
            <section class="about-me">
                <header>
                    <h1>About Me</h1>
                </header>
                <div class="profile-thumb">
                    <img src={ Me } className = "profilePic" alt="Me and my girlfriend"></img>
                </div>
                <p>
                    Hello! My name is Corey Smith. I'm an aspiring Full Stack Web Developer.
                </p>
                <div>
                <header>
                    <h1>Check out my Socials!</h1>
                </header>
                <ul>
                    <li>Linked-In</li>
                    <li>GitHub</li>
                    <li>Resume</li>
                </ul>
                </div>
            </section>
        </main>
    )
};


export default AboutMe;