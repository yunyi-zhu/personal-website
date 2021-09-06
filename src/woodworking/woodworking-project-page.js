import React from 'react';
import Navbar from './woodworking-navbar';
import Footer from './woodworking-footer';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

/* eslint-disable import/no-webpack-loader-syntax */
import One_ShoeBox from '!babel-loader!@mdx-js/loader!./woodworking-pages/1_shoe-box.mdx'

const links = {
  "1_shoe-box": <One_ShoeBox />
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