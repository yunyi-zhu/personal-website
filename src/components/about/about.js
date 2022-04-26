import React from 'react';
import Profile from './profile2.jpeg';
// import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-container">
    <img src={Profile} alt="./profile1.jpg"/>
    <div className="self-description-container">
      <div className="my-name">
        Yunyi Zhu
      </div>
      <div className="paragraph">
        PhD student in the <a href="https://hcie.csail.mit.edu/" target="_blank">HCI Engineering Group</a> at MIT, advised
        by <a href="https://hcie.csail.mit.edu/stefanie-mueller" target="_blank">Prof. Stefanie Mueller</a>.
      </div>
      <div className="paragraph">
        <div className="semibold">
          Email:
        </div>
        <div>yunyizhu@mit.edu</div>
      </div>
      <div className="paragraph">
        <div className="semibold">
          Research interests:
        </div>
        <div>Human Computer Interaction, Digital Fabrication.</div>
        <div>My current research explores ways to fabricate objects with dynamic appearances, including optic structures and programmable materials. I am also interested in haptics, shape-changing and sensing. 
        </div>
      </div>
      <div className="paragraph">
        <div className="semibold">Background:</div>
        Before joining as a PhD student, I worked as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller
      </a> and <a href="https://people.csail.mit.edu/dnj/" target="_blank">
        Prof. Daniel Jackson
      </a> at <a href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</a>.
        I won the <a href="https://www.eecs.mit.edu/2021-eecs-awards/" target="_blank">MIT EECS best undergraduate research award</a> in 2019 and 2021.
      </div>
    </div>
  </div>
);

export default About;