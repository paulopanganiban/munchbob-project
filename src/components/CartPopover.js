import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartItem from './CartItem'

const CartPopover = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <CartPopoverContainer>

            <CartPopoverTopContainer>
           {/* map cartState then pass to cartItem */}
           {
               cartItems?.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
           }
            </CartPopoverTopContainer>

            <CartPopoverBottomContainer>
                <Button>Go to Checkout</Button>
            </CartPopoverBottomContainer>
        </CartPopoverContainer>
    )
}

export default CartPopover
const CartPopoverBottomContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const CartPopoverTopContainer = styled.div`
padding: 10px;

`
const CartPopoverContainer = styled.div`
`