// reducer is a function that gets two property
// state object, last state or initial state that we're trying to store
// then receives an action

const initialState = {
    currentUser: null
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                // new state 
                ...state, // everything else on the state so we use the ...spread
                currentUser: action.payload,
            }
        case 'NOT_LOGGED_IN':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;

// ACTIONS

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})
export const signOutOfApp = (user) => ({
    type: 'NOT_LOGGED_IN',
    payload: user // user is null here 
})