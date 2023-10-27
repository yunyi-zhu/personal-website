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

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>

  );
};

export default App;
