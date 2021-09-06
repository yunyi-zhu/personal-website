import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './styles/styles.scss';
import MainPage from './pages/Index';
import WoodworkingMainPage from './woodworking/woodworking-main-page';
import WoodworkingAboutPage from './woodworking/woodworking-about-page';
import WoodworkingProjectPage from './woodworking/woodworking-project-page';
import ProjectsPage from './pages/projects-page';

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/woodworking">
          <WoodworkingMainPage />
        </Route>
        <Route exact path="/woodworking/about">
          <WoodworkingAboutPage />
        </Route>
        <Route path="/woodworking/project/:id">
          <WoodworkingProjectPage />
        </Route>p
      </Switch>
    </Router>
  );
};

export default App;
