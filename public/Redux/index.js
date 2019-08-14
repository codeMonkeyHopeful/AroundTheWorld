import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//action creators

const GOT_USER_IP = 'GOT_USER_IP'


//action triggers

//create Thunks if needed

//initial state

const intitialState = {}

//create reducer

export const reducer = (state = intitialState , action ) => {
switch(action.type){
    default:
        return state
}
}


//create store

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;