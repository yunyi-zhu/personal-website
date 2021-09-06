import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => (
  <div key={project.id} className="preview">
    <div className="thumbnail">
      <img src={require("./portfolio-thumbnails/" + project.thumbnail)} />
    </div>
    <div className="description">
      <div className="title">
        {project.title}
      </div>
      <div className="material">
        &bull; {!!project.material && project.material}
      </div>
      <div className="description">
        {!!project.description && project.description}
      </div>
      <div className="links">
        {
          project.links.map((pair,i) => (
            <div key={i} className="button">
              <Link to={pair.link} target="_blank">
                {pair.title}
              </Link>
            </div>
          ))
        }
        {!!project.mdx &&
        <div className="button">
          <Link to={"/woodworking/project/"+project.mdx}>Project Page</Link>
        </div>
        }
      </div>
    </div>
  </div>
);


export default Project;