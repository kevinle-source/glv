const frameReducer = (state = 'choose-venue', action) => {
    switch (action.type) {
        case "change-frame":
            return action.payload;
        default:
            return state
    }
}



export default frameReducer