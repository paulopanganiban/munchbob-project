const initialState = {
    hidden: true,
}

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_HAMBURGER':
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default headerReducer
// actions to dispatch
export const toggleHamburger = () => ({
    type: "TOGGLE_HAMBURGER"
})