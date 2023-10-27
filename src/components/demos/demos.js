import React from 'react';
import demos from '../../data/demos.json';
import DemoPreview from './demo_preview';

const Demos = () =>
  (
    <div className="demo-section">
      <div className="section-title">
        Posters and Demos
      </div>
      <div className="demos">
        {demos.map((demo) => <DemoPreview key={demo.id} demo={demo} />)}
      </div>
    </div>
  );


export default Demos;