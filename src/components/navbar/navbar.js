import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GoogleScholarIcon } from './icons/googlescholar.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';

const Navbar = ( {page="index"} ) => {
  return (
    <nav>
      <div className="navigation">
        <div className="name-brand">
          <Link to="/" >
            Yunyi Zhu
          </Link>
        </div>
        
        <div className="menu">
          <ScrollLink to="publications"  smooth={true} offset={-70} duration={200} >Publications</ScrollLink>
          <ScrollLink to="awards"  smooth={true} offset={-70} duration={200} >Awards</ScrollLink>
          <ScrollLink to="teaching"  smooth={true} offset={-70} duration={200} >Teaching</ScrollLink>
          {/*<Link to="/projects">Projects</Link>*/}
          <a href={`${process.env.PUBLIC_URL}/yunyizhu-cv.pdf`} target="_blank">CV</a>
        </div>
      </div>
      <div className="info">
        <div className="googlescholar">
          <a href="https://scholar.google.com/citations?user=tExDwdkAAAAJ&hl=en" target="_blank">
            <GoogleScholarIcon />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/yunyi-zhu" target="_blank">
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