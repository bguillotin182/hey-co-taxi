const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const MOUSE_CHANGE_XY = 'MOUSE_CHANGE_XY';
const CONNECT_USER = 'CONNECT_USER';
const UPDATE_USER = 'UPDATE_USER';

export const changeMouseXY = (x, y) => ({
    type: MOUSE_CHANGE_XY,
    payload: { x, y },
});

export const changeMouseClickPositionXY = (x, y) => ({
    type: 'MOUSE_CLICK_POSITION_XY',
    payload: { x, y },
})

export const changeMouseDoubleClick = (x, y) => ({
    type: 'MOUSE_DOUBLE_CLICK',
    payload: { x, y },
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: { user },
});

export const fetchUser = (payload) => ({
    type: FETCH_USER,
    payload: payload,
});

export const fetchUserFulfilled = payload => ({
    type: FETCH_USER_FULFILLED,
    payload: payload,
});

export const connectUser = isConnected => ({
    type: CONNECT_USER,
    payload: isConnected,
});
