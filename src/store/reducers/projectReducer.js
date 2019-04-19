const initState = {
  projects: [
    {id: 1, title: 'title one', content: 'lorem ipsom dolores'},
    {id: 2, title: 'title two', content: 'lorem ipsom dolores'},
    {id: 3, title: 'title three', content: 'lorem ipsom dolores'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch( action.type ) {
    case 'CREATE_PROJECT':
      console.log('creacted project', action.project);
  }
  return state;
}

export default projectReducer;
