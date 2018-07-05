export const changeMouseXY = (x, y) => ({
    type: 'MOUSE_CHANGE_XY',
    payload: { x, y },
});

export const changeMouseClickPositionXY = (x, y) => ({
    type: 'MOUSE_CLICK_POSITION_XY',
    payload: { x, y },
})

export const changeMouseDoubleClick = (x, y) => ({
    type: 'MOUSE_DOUBLE_ CLICK',
    payload: { x, y },
})
