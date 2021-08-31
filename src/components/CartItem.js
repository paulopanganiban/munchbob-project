import React from 'react'
import styled from 'styled-components'
const CartItem = ({ item: {
    imageUrl, price, name, quantity
} }) => {
    return (
        // TODO: PUT STYLING
        <CartItemContainer>
            <img src={imageUrl} alt={imageUrl} 
            style={{height: 15}}
            />
            <p>{name}</p>
            <p>{quantity} x {price}</p>
        </CartItemContainer>
    )
}

export default CartItem
const CartItemContainer = styled.div`

`