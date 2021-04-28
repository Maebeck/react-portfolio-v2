import React from 'react';
import AboutDesc from '../components/AboutDesc';
import AboutImg from '../components/AboutImg';
import AboutTitle from '../components/AboutTitle';

function AboutMe () {
    return (
        <div class='about'>
        <AboutTitle />
        <AboutImg />
        <AboutDesc />
        </div>
    )
};

export default AboutMe;