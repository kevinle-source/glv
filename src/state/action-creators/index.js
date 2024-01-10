export const changeFrame = (frame) => {
    return (dispatch) => {
        dispatch({
            type: 'change-frame',
            payload: frame
        })
    }
}
