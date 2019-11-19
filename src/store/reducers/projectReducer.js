import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  GET_POSTS,
  GET_POSTS_ERROR
} from '../actions/types';

const initState = {
  projects: [
    {_id: 1, title: 'title one', content: 'lorem ipsom dolores'},
    {_id: 2, title: 'title two', content: 'lorem ipsom dolores'},
    {_id: 3, title: 'title three', content: 'lorem ipsom dolores'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch( action.type ) {
    case CREATE_PROJECT:
      console.log(`Created project: ${action.project}`);
      return state;
    case CREATE_PROJECT_ERROR:
      console.log(`Create project error: ${action.err}`);
      return state;
    case GET_POSTS_ERROR:
      console.log(`GET_POSTS_ERROR`);
      return state;
    case GET_POSTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}

export default projectReducer;
