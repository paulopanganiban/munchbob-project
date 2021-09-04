import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { closeCart } from '../redux/cartReducer'
import CartItem from './CartItem'

const CartPopover = ({history}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <CartPopoverContainer>

            <CartPopoverTopContainer>
           {/* map cartState then pass to cartItem */}
           {
               cartItems?.length ? 
               cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
               :
               (<span>Your cart is empty.</span>)
           }
            </CartPopoverTopContainer>

            <CartPopoverBottomContainer>
                <Button onClick={() => {history.push('/checkout')
                dispatch(closeCart(false))
            }}>
                Go to Checkout</Button>
            </CartPopoverBottomContainer>
        </CartPopoverContainer>
    )
}

export default withRouter(CartPopover)
const CartPopoverBottomContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const CartPopoverTopContainer = styled.div`
padding: 10px;

`
const CartPopoverContainer = styled.div`
max-height: 500px;
overflow-y: auto;
`