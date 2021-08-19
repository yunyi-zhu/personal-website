import React from 'react';
import courses from '../../data/teaching.json';

const Teaching = () =>
  (
    <div className="teaching-section">
      <div className="section-title">
        Teaching
      </div>
      <div className="teaching">
        {courses.map((course) =>
          <div key={course.id} className="preview">
            <div className="title">
              { course.link ?
                <a href={course.link} target="_blank">
                  {course.courseName}
                </a> :
                <div>
                  {course.courseName}
                </div>
              }
            </div>
            <div className="descriptions">
              <div>
                {course.term}
              </div>
              <ul>
                {course.details.map((job, i)=> (
                  <li key={i}>
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );


export default Teaching;