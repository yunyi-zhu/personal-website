import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './styles/styles.scss';
import MainPage from './pages/Index';
import WoodworkingMainPage from './woodworking/woodworking-main-page';
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
      </Switch>
    </Router>
  );
};

export default App;
