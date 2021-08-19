import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/styles.scss';
import Navbar from './components/navbar/navbar';
import Research from './components/research/research';
import About from './components/about/about';
import Awards from './components/awards/awards';
import Footer from './components/navbar/footer';
import Teaching from './components/teaching/teaching';
import Projects from './components/projects/project';
import ConferenceAttendance from './components/conference/conference-attendance';

const App = () => {
  const research = React.useRef(null);
  const projects = React.useRef(null);
  const awards = React.useRef(null);

  const scrollToComponent = (refName) => {
    switch (refName) {
      case "research":
        research.current.scrollIntoView();
        break;
      case "awards":
        awards.current.scrollIntoView();
        break;
      case "projects":
        projects.current.scrollIntoView();
        break;
      default:
        break;
    }
  }

  return (
    <Router>
      <div className="page-container">
        <Navbar scrollFunction={scrollToComponent}/>
        <div className="body-part">
          <About/>
          <div ref={research}>
            <Research />
          </div>
          <div ref={awards}>
            <Awards />
          </div>
          <div>
            <ConferenceAttendance />
          </div>
          <div>
            <Teaching />
          </div>
          <div>
            <Projects />
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
