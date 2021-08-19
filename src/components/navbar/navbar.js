import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GoogleScholarIcon } from './icons/googlescholar.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';

const Navbar = ( {scrollFunction} ) => {
  return (
    <nav>
      <div className="navigation">
        <Link to="/" onClick={() => window.location.reload()} className="name-brand">Yunyi Zhu</Link>
        <div className="menu">
          <button onClick={() => scrollFunction("research")}>Publications</button>
          <button onClick={() => scrollFunction("awards")}>Awards</button>
          <button>More</button>
          <Link to="yunyizhu-cv.pdf" target="_blank">CV</Link>
        </div>
      </div>
      <div className="info">
        <div className="googlescholar">
          <a href="https://scholar.google.com/citations?user=tExDwdkAAAAJ&hl=en" target="_blank">
            <GoogleScholarIcon />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/yunyizhu1" target="_blank">
            <GithubIcon />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/yunyizhu97/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;