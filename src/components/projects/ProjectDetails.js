import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) {
    return <Redirect to='/signin' />;
  }

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - {project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{(new Date()).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading projects...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.project.projects;
  const project = projects.length ? projects.find(item => item._id === id) : null;
  return {
    project,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ProjectDetails);
