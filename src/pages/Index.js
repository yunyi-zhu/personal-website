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
  return (
    <div className="page-container">
      <Navbar page="index" />
      <div className="body-part">
        <About/>
        <div>
          <Research id="research"/>
        </div>
        <div>
          <Awards id="awards"/>
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