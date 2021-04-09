/* eslint-disable react/style-prop-object */
import React from 'react';
import './pc.css';

export default function ProjectCard (props) {
  console.log(props);
  return (
    <main className ="card-div-style card-size">
<div class="card">
  <img src={props.image} className="card-img-top" alt={props.title} />
  <div class="card-body">
  <p class="card-text">{props.title}</p>
    <p class="card-text">{props.challenge}</p>
    <div class='btn-space'>
    <a href={props.repoLink} class="btn btn-style">GitHub</a>
    <a href={props.siteLink} class="btn btn-style">Live Site</a>
    </div>
  </div>
</div>
</main>

  )
};

