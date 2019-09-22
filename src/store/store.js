import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

import rootReducers from './rootReducer';

const middlewares = [thunkMiddleware, logger];

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
		...middlewares
	)
);

console.disableYellowBox = true; // Deshabilitar Warn en la UI

export default store
