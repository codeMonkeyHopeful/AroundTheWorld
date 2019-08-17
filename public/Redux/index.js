import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//action creators

const GOT_USER_IP = 'GOT_USER_IP';
const GOT_USER_LOCATION = 'GOT_USER_LOCATION';
const GOT_USER_IMAGE = 'GOT_USER_IMAGE';

//action triggers

export const updateUserIP = ip => {
  return { type: GOT_USER_IP, ip };
};

export const updateUserLocation = location => {
  return { type: GOT_USER_LOCATION, location };
};

export const updateUserImage = image => {
  return { type: GOT_USER_IMAGE, image };
};

//create Thunks if needed

//initial state

const intitialState = { ip: 0, location: {}, image: '' };

//create reducer

export const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case GOT_USER_IP:
      return { ...state, ip: action.ip };
    case GOT_USER_LOCATION:
      return { ...state, location: action.location };
    case GOT_USER_IMAGE:
      return { ...state, image: action.image };
    default:
      return state;
  }
};

//create store

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
