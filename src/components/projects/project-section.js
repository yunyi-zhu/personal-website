import React from 'react';
import researchProjects from '../../data/projects.json';
import ProjectPreview from './project_preview.js';

const Project = ({category="fab", sectionTitle="section title placeholder"}) => (
  <div className="project-section">
    <div className="section-title">
      {sectionTitle}
    </div>
    <div className="project-list">
      {
        researchProjects
          .filter((project)=>(project.category === category))
          .map((project) =>
            <ProjectPreview key={project.id} project={project}
            />)
      }
    </div>
  </div>
);


export default Project;