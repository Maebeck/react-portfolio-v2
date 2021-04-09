import React from 'react';

import projects from '../projects.json';
import ProjectCard from '../components/ProjectCard/index';


function ProjectPage (){
        return(
    projects.map(projects => {
    return (
        <ProjectCard 
        id ={projects.id}
        title={projects.title}
        image={projects.image}
        challenge={projects.challenge}
        repoLink={projects.repoLink}
        siteLink={projects.siteLink}
        />
    )
}))};
    
export default ProjectPage;