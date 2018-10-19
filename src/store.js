import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { fetchUserEpic } from './utils/user';
import ACTION_TYPE from './constants';
import * as THREE from 'three';

const initialState = {
    x: 0,
    y: 0,
    user: {
        firstName: 'Benoit',
        lastName: 'GUILLOTIN',
    },
    isConnected: false,
    cubeRotation: new THREE.Euler(),
    clientX: 0,
    clientY: 0,
}

function reducer(state=initialState, {type, payload}) {
    switch (type) {
        case ACTION_TYPE.CUBE_ROTATION : 
            return {
                ...state,
                cubeRotation: payload,
            }
        case ACTION_TYPE.CONNECT_USER :
            return {
                ...state,
                isConnected: payload,
            }
        case ACTION_TYPE.UPDATE_USER:
            return {
                ...state,
                user: payload.user,
            }
        case ACTION_TYPE.MOUSE_CLICK_POSITION_XY: {
            return {
                ...state,
                clientX: payload.clientX,
                clientY: payload.clientY,
            }
        }
        case ACTION_TYPE.MOUSE_CHANGE_XY:
            return {
                ...state,
                x: payload.x,
                y: payload.y,
            }
        case ACTION_TYPE.FETCH_USER: {
            return {
                ...state,
                [payload]: payload,
            }
        }
        case ACTION_TYPE.FETCH_USER_FULFILLED:
          return {
            ...state,
            // `login` is the username
            [payload.login]: payload
        }
        default:
            return state;
    }
}

const epicMiddleware = createEpicMiddleware(fetchUserEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));

//epicMiddleware.run(fetchUserEpic);

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
