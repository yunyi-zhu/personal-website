import React from 'react';
import Navbar from './woodworking-navbar';
import Footer from './woodworking-footer';
import portfolio from './portfolio.json';


const WoodworkingMainPage = () => (
  <div className="woodworking-page">
    <Navbar />
    <div className="woodworking-portfolio">
      {
        portfolio.map((project) => (
          <div key={project.id}>
            {project.title}
          </div>
        ))
      }
    </div>
    <Footer />
  </div>
);

export default WoodworkingMainPage;