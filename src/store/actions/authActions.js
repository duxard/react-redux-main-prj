import firebase from '../../config/fbConfig';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR
} from './types';

// export const signIn = (credentials) => {
//   console.log(firebase.auth());
//   return (dispatch, getState) => {
//     firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
//     .then((data) => {
//       console.log(data);
//
//     firebase.auth().signInWithEmailAndPassword(
//       credentials.email,
//       credentials.password
//     ).then((data) => {
//       dispatch({type: 'LOGIN_SUCCESS'});
//     })
//   }).catch((err) => {
//       dispatch({type: 'LOGIN_ERROR', err});
//     });
//   }
// }

export const signIn = (credentials) => {
  // console.log(firebase.auth());
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((data) => {
      dispatch({type: LOGIN_SUCCESS});
    }).catch((err) => {
      dispatch({type: LOGIN_ERROR, err});
    });
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    firebase.auth()
    .signOut()
    .then(() => {
      dispatch({type: SIGNOUT_SUCCESS});
    }).catch((err) => {
      dispatch({type: SIGNOUT_ERROR, err});
    });
  }
}
