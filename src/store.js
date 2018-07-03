import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { fetchUserEpic } from './utils/user';

const initialState = {
    x: 0,
    y: 0,
    user: {
        firstName: 'Benoit',
        lastName: 'GUILLOTIN',
    },
    isConnected: false,
}

function reducer(state=initialState, {type, payload}) {
    switch (type) {
        case 'CONNECT_USER' :
            return {
                ...state,
                isConnected: payload,
            }
        case 'UPDATE_USER':
            return {
                ...state,
                user: payload.user,
            }
        case 'MOUSE_CHANGE_XY':
            return {
                ...state,
                x: payload.x,
                y: payload.y,
            }
        case 'FETCH_USER': {
            return {
                ...state,
                [payload]: payload,
            }
        }
        case 'FETCH_USER_FULFILLED':
          return {
            ...state,
            // `login` is the username
            [payload.login]: payload
        }
        default:
            return state;
    }
}

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(fetchUserEpic);

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
