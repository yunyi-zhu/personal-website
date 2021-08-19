import React from 'react';
import ProjectSection from '../components/projects/project-section';
import Navbar from "../components/navbar/navbar";

const Projects = () => (
  <div className="page-container">
    <Navbar page="project"/>
    <div className="body-part">
      <div>
        <ProjectSection category="fab" sectionTitle="Projects Related to Fabrication and Design" />
        <ProjectSection category="research" sectionTitle="Other Research Projects" />
        <ProjectSection category="other" sectionTitle="Other Projects" />
      </div>
    </div>
  </div>
);


export default Projects;