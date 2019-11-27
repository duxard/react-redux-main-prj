import React, { Component } from 'react';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.projects);
  }

  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to='/signin' />;
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/*
Without mapDispatchToProps one has to use getPosts() the following way:

export default connect(mapStateToProps, { getPosts })(Dashboard);
*/
