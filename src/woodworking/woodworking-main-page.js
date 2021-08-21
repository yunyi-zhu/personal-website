import React from 'react';
import Navbar from './woodworking-navbar';
import Footer from './woodworking-footer';
import WoodworkingPortfolioPreview from './woodworking-portfolio-preview';
import portfolio from './portfolio.json';


const WoodworkingMainPage = () => (
  <div className="woodworking-page">
    <Navbar />
    <div className="woodworking-page-inner woodworking-portfolio">
      {
        portfolio.map((project) => (
          <WoodworkingPortfolioPreview project={project} />
        ))
      }
    </div>
    <Footer />
  </div>
);

export default WoodworkingMainPage;