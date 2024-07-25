import React from 'react';
import Navbar from './woodworking-navbar';
import Footer from './woodworking-footer';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import OneShoeBox from './woodworking-pages/1_shoe-box.mdx';
import TwoShoeRack from './woodworking-pages/2_shoe-rack.mdx';

const links = {
  "1_shoe-box": <OneShoeBox />,
  "2_shoe-rack": <TwoShoeRack />
}

const Project = () => {
  const { id } = useParams();
  return (
    <div className="woodworking-page">
      <Navbar />
      <div className="woodworking-project-page">
        {!!id && links[id] &&
          links[id]
        }
        {!id || !links[id] &&
        <div>
          <div>
            Sorry! I didn't do a project named {id}.
          </div>
          <Link to="/woodworking">Click Here to Go Back</Link>
        </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default Project;