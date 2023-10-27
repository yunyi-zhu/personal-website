import React from 'react';

const Demo = ({demo}) => (
  <div className="demo-preview">
    <div className="title">
      <div dangerouslySetInnerHTML={ { __html: demo.text } }></div>
      <div className="links">
          {!!demo.doi && <a href={demo.doi} target="_blank">DOI</a>}
          {!!demo.pdf && <a href={demo.pdf} target="_blank">PDF</a>}
      </div>
    </div>
  </div>
);


export default Demo;