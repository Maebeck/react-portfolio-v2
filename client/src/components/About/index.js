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
                <p className='me-desc row'>
                    Hello! My name is Corey Smith. I'm a "fresh-outta-bootcamp" Full Stack Web Developer.
                    <h2>Some things about me:</h2>
                    <ul>
                        <li>Gamer - PC Builder - Coder</li>
                        <li>Skiier - Weight-Lifter - Mediocre Chef</li>
                        <li>Born and raised in SLC, UT</li>
                    </ul>
                </p>
                <div>
                </div>
                </div>
            </section>
        </main>
    )
};


export default AboutMe;