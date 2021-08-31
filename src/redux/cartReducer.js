const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                // add any additonal values
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}

export default cartReducer
// actions to dispatch
export const addItem = item => ({
   type: "ADD_ITEM",
   payload: item 
})