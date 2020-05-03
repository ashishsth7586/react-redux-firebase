import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from "redux-firestore";

// Reducers

const firebaseConfig = {
  apiKey: "AIzaSyDVjNj63V87IcHcLi-Y04zcPcvDU-VNJJ0",
  authDomain: "reactredux-client-panel.firebaseapp.com",
  databaseURL: "https://reactredux-client-panel.firebaseio.com",
  projectId: "reactredux-client-panel",
  storageBucket: "reactredux-client-panel.appspot.com",
  messagingSenderId: "709413670712",
  appId: "1:709413670712:web:ea7085ada5d67812a2fbcd",
  measurementId: "G-1DV1XXQCDZ",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  userFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

/* The following commented snippets is for react-redux-firebase v2.0 */
// Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
//   reduxFirestore(firebase) // <- needed if using firestore
// )(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create store with reducers and initial state
const initialState = {};

// create store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
