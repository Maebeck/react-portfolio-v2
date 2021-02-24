/* eslint-disable react/style-prop-object */
import React from 'react';


export default function ProjectCard (props) {
  console.log(props);
  return (
    <main>
<div class="card">
  <img src={props.image} className="card-img-top" alt={props.title} />
  <div class="card-body">
  <p class="card-text">{props.title}</p>
    <p class="card-text">{props.challenge}</p>
    <a href={props.repoLink} class="btn btn-dark">GitHub</a>
    <a href={props.siteLink} class="btn btn-primary">Live Site</a>
  </div>
</div>
</main>

  )
};

