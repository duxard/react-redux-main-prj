import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CLEAR_ERRORS_CACHE
} from '../actions/types';

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('LOGIN_ERROR');
      return {
        ...state,
        authError: `Login failed: ${action.err}`
      };
    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS');
      return {
        ...state,
        authError: null
      }
    case SIGNOUT_SUCCESS:
      console.log('SIGNOUT_SUCCESS');
      return state;
    case SIGNOUT_ERROR:
      console.log('SIGNOUT_ERROR');
      return state;
    case SIGNUP_SUCCESS:
      console.log('SIGNUP_SUCCESS');
      return {
        ...state,
        authErr: null
      }
    case SIGNUP_ERROR:
      console.log('SIGNUP_ERROR');
      return {
        ...state,
        authError: `Signup failed: ${action.err}`
      };
    case CLEAR_ERRORS_CACHE:
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
}

export default authReducer;
