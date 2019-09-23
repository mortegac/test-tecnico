import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'


import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import { firebaseReducer } from 'react-redux-firebase'
// import { Provider } from 'react-redux'
// import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

import dbConnect from '../services/firebase';

import rootReducers from './rootReducer';

const middlewares = [ thunkMiddleware.withExtraArgument({getFirebase, getFirestore}), 
                      logger
                    ];

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducers,
  compose(
    applyMiddleware( ...middlewares ),
    // reactReduxFirebase(dbConnect),
    reactReduxFirebase(dbConnect, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(dbConnect)
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.disableYellowBox = true; // Deshabilitar Warn en la UI

// store.firebaseAuthIsReady.then(() => {
//   ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//   registerServiceWorker();
// });


export default store
