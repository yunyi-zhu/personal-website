import React from 'react';
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import Research from "../components/research/research";
import Awards from "../components/awards/awards";
import ConferenceAttendance from "../components/conference/conference-attendance";
import Teaching from "../components/teaching/teaching";
import Projects from "../components/projects/projects-on-main-page";
import Footer from "../components/navbar/footer";

const MainPage = () => {
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
      default:
        break;
    }
  }

  return (
    <div className="page-container">
      <Navbar page="index" scrollFunction={scrollToComponent}/>
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
  );
}

export default MainPage;