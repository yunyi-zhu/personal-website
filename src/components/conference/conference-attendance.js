import React from 'react';

const Attendance = () =>
  (
    <div className="conference-attendance-section">
      <div className="section-title">
        Conference Service
      </div>
      <div className="conference-attendance-info">
        <div>
          <div className="sec-title">
            Reviewer
          </div>
          <div className="info">
            <div className="info-line">
              <div className="item">ACM TEI</div>
              <div className="year">2021</div>
            </div>
            <div className="info-line">
              <div className="item">ACM CHI EA</div>
              <div className="year">2022</div>
            </div>
            <div className="info-line">
              <div className="item">ACM C&C</div>
              <div className="year">2022</div>
            </div>
            <div className="info-line">
              <div className="item">ACM UIST</div>
              <div className="year">2022</div>
            </div>
          </div>
        </div>
        <div>
          <div className="sec-title">
            Volunteering
          </div>
          <div className="info">
            <div className="info-line">
              <div className="item">ACM CHI Student Volunteer</div>
              <div className="year">2022</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

export default Attendance;