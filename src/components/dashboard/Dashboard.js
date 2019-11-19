import React, { Component } from 'react';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/projectActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.projects);
  }

  render() {
    console.log(this.props.projects);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
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
    projects: state.project.projects
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
