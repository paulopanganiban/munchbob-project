const initialState = {
    cartItems: [],
    visible: false,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case 'CLOSE_CART':
            return {
                ...state,
                visible: action.payload
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                visible: !state.visible
            }
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer
// actions to dispatch
export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})
export const clearItemFromCart = item => ({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item
})
export const addItem = item => ({
    type: "ADD_ITEM",
    payload: item
})
export const closeCart = bool => ({
    type: 'CLOSE_CART',
    payload: bool
})
export const toggleCart = () => ({
    type: 'TOGGLE_CART'
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
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem.quantity === 1) {
        // filter returns values
        // that is true
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}