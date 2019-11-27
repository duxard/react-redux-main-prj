import firebase from '../../config/fbConfig';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CLEAR_ERRORS_CACHE
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
    ).then(() => {
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

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        console.log(res);
        return firestore.collection('users').doc(res.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: `${newUser.firstName[0].toUpperCase()}${newUser.lastName[0].toUpperCase()}`
        });
      })
      .then((data) => {
        console.log(data);
        dispatch({type: SIGNUP_SUCCESS});
      })
      .catch((err) => {
        dispatch({type: SIGNUP_ERROR, err});
      });
  }
}

export const clearAuthErrorsCache = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_ERRORS_CACHE});
  }
}
