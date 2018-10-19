import ACTION_TYPE from './constants'

const changeMouseXY = (x, y) => ({
    type: ACTION_TYPE.MOUSE_CHANGE_XY,
    payload: { x, y },
});

const changeMouseClickPositionXY = (clientX, clientY) => ({
    type: ACTION_TYPE.MOUSE_CLICK_POSITION_XY,
    payload: { clientX, clientY },
})

const changeMouseDoubleClick = (x, y) => ({
    type: ACTION_TYPE.MOUSE_DOUBLE_CLICK,
    payload: { x, y },
})

const updateUser = (user) => ({
    type: ACTION_TYPE.UPDATE_USER,
    payload: { user },
});

const fetchUser = (payload) => ({
    type: ACTION_TYPE.FETCH_USER,
    payload: payload,
});

const fetchUserFulfilled = (payload) => ({
    type: ACTION_TYPE.FETCH_USER_FULFILLED,
    payload: payload,
});

const connectUser = (isConnected) => ({
    type: ACTION_TYPE.CONNECT_USER,
    payload: isConnected,
});

const cubeRotation = (threeEulerCoordinate) => ({
    type: ACTION_TYPE.CUBE_ROTATION,
    payload: threeEulerCoordinate,
});

export {
    changeMouseXY,
    changeMouseClickPositionXY,
    changeMouseDoubleClick,
    connectUser,
    fetchUser,
    fetchUserFulfilled,
    updateUser,
    cubeRotation,
};