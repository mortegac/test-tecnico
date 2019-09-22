import { combineReducers } from 'redux';
import loading from './loading/reducer';
import users from './users/reducer';
import errors from './errors/reducer';
import posts from './posts/reducer'

export const reducers = () => ({
  ...loading,
  ...errors,
  ...users,
  ...posts,
});

export default combineReducers(reducers());
