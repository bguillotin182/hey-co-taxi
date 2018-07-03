import { createStore } from 'redux';

const initialState = {
    x: 0,
    y: 0,
    user: {
        firstName: 'Benoit',
        lastName: 'GUILLOTIN',
    }
}

function reducer(state=initialState, {type, payload}) {
    switch (type) {
        case 'USER_SET':
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
        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
