import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//action creators

const GOT_USER_IP = 'GOT_USER_IP'


//action triggers

export const updateUserIP = (ip) =>{
    return {type: GOT_USER_IP, ip }
}

//create Thunks if needed

//initial state

const intitialState = {ip: 0}

//create reducer

export const reducer = (state = intitialState , action ) => {
switch(action.type){
    case GOT_USER_IP:
        return {...state, ip: action.ip}
    default:
        return state
}
}


//create store

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;