import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import loading from './loading/reducer';
import users from './users/reducer';
import errors from './errors/reducer';
import posts from './posts/reducer'

export const reducers = () => ({
  ...loading,
  ...errors,
  ...users,
  ...posts,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default combineReducers(reducers());
