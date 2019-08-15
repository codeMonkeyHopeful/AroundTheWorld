import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


//action creators

const GOT_USER_IP = 'GOT_USER_IP'
const GOT_USER_LOCATION = 'GOT_USER_LOCATION'

//action triggers

export const updateUserIP = (ip) =>{
    return {type: GOT_USER_IP, ip }
}

export const updateUserLocation = (location) =>{
    return {type: GOT_USER_LOCATION, location}
}

//create Thunks if needed

//initial state

const intitialState = 
{ip: 0,
 location: {}
}

//create reducer

export const reducer = (state = intitialState , action ) => {
switch(action.type){
    case GOT_USER_IP:
        return {...state, ip: action.ip}
    case GOT_USER_LOCATION:
        return {...state, location: action.location}
    default:
        return state
}
}


//create store

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;