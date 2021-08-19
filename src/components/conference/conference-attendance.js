import React from 'react';

const Attendance = () =>
  (
    <div className="conference-attendance-section">
      <div className="section-title">
        Conference Attendance
      </div>
      <ul className="conference-attendance">
        <li>
          <a href="https://chi2021.acm.org/" target="_blank">ACM Conference on Human Factors in Computing Systems (CHI) 2021, Virtual</a>
        </li>
        <li>
          <a href="https://uist.acm.org/uist2020/" target="_blank">Symposium on User Interface Software and Technology (UIST) 2020, Virtual</a>
        </li>
        <li>
          <a href="https://uist.acm.org/uist2019/" target="_blank"> Symposium on User Interface Software and Technology (UIST) 2019, New Orleans</a>
        </li>
      </ul>
    </div>
  );

export default Attendance;