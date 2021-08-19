import React from 'react';
import researchProjects from '../../data/research_projects.json';
import ResearchPreview from './research_preview.js';

const Research = () => (
  <div className="research-section">
    <div className="section-title">
      Publications
    </div>
    <div>
      {researchProjects.map((research) =>
        <ResearchPreview key={research.id} research={research}
        />)}
    </div>
  </div>
);


export default Research;