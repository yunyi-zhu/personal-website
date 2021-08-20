import React from 'react';
import { useRef, createRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './styles/styles.scss';
import MainPage from './pages/Index';
import ProjectsPage from './pages/projects-page';

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
