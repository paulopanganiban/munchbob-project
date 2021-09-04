import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CheckoutItem from '../components/CheckoutItem'

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartItemsTotalPrice = cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
        accumulatedQuantity+ cartItem.quantity * cartItem.price, 0)
    return (
        <CheckoutPageContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    />
                ))
            }
        </CheckoutPageContainer>
    )
}

export default CheckoutPage
const CheckoutPageContainer = styled.div`

`