const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
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
// utilities
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // hanap tayo sa cartItems through id, tapos check
    // kung merong existing na
    const existingCartItem = cartItems.find(cartItem =>
        cartItem.id === cartItemToAdd.id)

    // check natin kung meron
    if (existingCartItem) {
        // 
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    // if no cart items are found 
    // return existing cartItems, and add an object
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
