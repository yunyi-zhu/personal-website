import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import MainPage from './pages/Index';
import WoodworkingMainPage from './woodworking/woodworking-main-page';
import WoodworkingAboutPage from './woodworking/woodworking-about-page';
import WoodworkingProjectPage from './woodworking/woodworking-project-page';
import SpencerMainPage from './spencer/main';
// import ProjectsPage from './pages/projects-page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/woodworking" element={<WoodworkingMainPage />} />
      <Route path="/woodworking/about" element={<WoodworkingAboutPage />} />
      <Route path="/woodworking/project/:id" element={<WoodworkingProjectPage />} />
      <Route path="/spencer" element={<SpencerMainPage />} />
    </Routes>
  );
};

export default App;
