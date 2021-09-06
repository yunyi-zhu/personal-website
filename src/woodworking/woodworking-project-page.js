import React from 'react';
import Navbar from './woodworking-navbar';
import Footer from './woodworking-footer';
import { useParams } from 'react-router-dom'




const Project = () => {
  const { id } = useParams();
  return (
    <div className="woodworking-page">
      <Navbar />
      <div className="woodworking-page-inner">
        Project Page {id}
      </div>
      <Footer />
    </div>
  );
}

export default Project;