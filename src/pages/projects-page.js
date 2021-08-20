import React from 'react';
import ProjectSection from '../components/projects/project-section';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";

const Projects = () => (
  <div className="page-container">
    <Navbar page="project"/>
    <div className="body-part">
      <div>
        <ProjectSection category="fab" sectionTitle="Projects Related to Fabrication and Design" />
        <ProjectSection category="research" sectionTitle="Other Research Projects" />
        <ProjectSection category="other" sectionTitle="Web and Game Development" />
      </div>
    </div>
    <Footer />
  </div>
);


export default Projects;