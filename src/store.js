import { createStore } from 'redux';

const initialState = {
    x: 0,
    y: 0,
}

function reducer(state=initialState, {type, payload}) {
    switch (type) {
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
