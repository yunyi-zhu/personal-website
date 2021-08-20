import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './styles/styles.scss';
import Home from './pages/Index';
import ProjectsPage from './pages/projects-page';

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
