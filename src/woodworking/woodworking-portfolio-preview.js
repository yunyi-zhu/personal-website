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
          {!!project.projectPage &&
            <div className="button">
              <Link to={"/woodworking/project/"+project.projectPage}>Project Page</Link>
            </div>
          }
          {
            project.links.map((pair,i) => (
              <div key={i} className="button">
                <Link to={pair.link} target="_blank">
                  {pair.title}
                </Link>
              </div>
            ))
          }
      </div>
    </div>
  </div>
);


export default Project;