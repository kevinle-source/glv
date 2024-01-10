const userReducer = (state = {login: false, name: null}, action) => {
    switch (action.type) {
        case "user-login":
            return action;
        default:
            return state
    }
}

export default userReducer