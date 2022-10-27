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
        PhD student in the <a href="https://hcie.csail.mit.edu/" target="_blank">HCI Engineering Group</a> at <a href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</a>, advised by <a href="https://hcie.csail.mit.edu/stefanie-mueller" target="_blank">Prof. Stefanie Mueller</a>. I am a 2021 <a href="https://oge.mit.edu/fellowships/presidential-graduate-fellowship-program/" target="_blank">Jacobs Presidential Fellow</a>, and I am currently a visiting student in the <a href="https://www.akg.t.u-tokyo.ac.jp/" target="_blank">Kawahara Lab</a> at <a href="https://www.u-tokyo.ac.jp/en/" target="_blank">The University of Tokyo</a>, working with <a href="https://narumi.me/" target="_blank">Prof. Koya Narumi</a>.  
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
        <div>My research explores fabrication methods for objects with dynamic appearances, including using optic structures and programmable materials. I am also interested in textile and shape-changing.
        </div>
      </div>

      <div className="paragraph">
      <div className="semibold">
          Background:
        </div>
        Before joining as a PhD student, I worked at <a href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</a> as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller
      </a> and <a href="https://people.csail.mit.edu/dnj/" target="_blank">
        Prof. Daniel Jackson
      </a>, where I won the <a href="https://www.eecs.mit.edu/2021-eecs-awards/" target="_blank">MIT EECS best undergraduate research award</a> in 2019 and 2021. 
      </div>

    </div>
  </div>
);

export default About;