import axios from 'axios';

import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  GET_POSTS,
  GET_POSTS_ERROR
} from './types';

const url = 'https://asta-web-1.herokuapp.com/api';

export const createProject = (project) => {
  return (dispatch) => {
    axios
      .post(`${url}/projects`, {
        ...project,
        authorFirstName: 'Alex',
        authorLastName: 'Starchenko',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({type: CREATE_PROJECT, project});
      })
      .catch(err => {
        dispatch({type: CREATE_PROJECT_ERROR, err});
      });
  }
};

export const getPosts = () => dispatch => {
  axios
    .get(`${url}/projects`)
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS_ERROR,
        payload: null
      })
    );
};
