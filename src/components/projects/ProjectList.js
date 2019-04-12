import React from 'react';

const ProjectList = () => {
  return (
    <div className="project-list section">

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title</span>
          <p>Posted by AUTHOR_NAME</p>
          <p className="grey-text">{(new Date()).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title</span>
          <p>Posted by AUTHOR_NAME</p>
          <p className="grey-text">{(new Date()).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title</span>
          <p>Posted by AUTHOR_NAME</p>
          <p className="grey-text">{(new Date()).toLocaleDateString()}</p>
        </div>
      </div>

    </div>
  );
}

export default ProjectList;
