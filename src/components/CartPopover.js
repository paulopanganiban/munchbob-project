import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const CartPopover = () => {
    return (
        <CartPopoverContainer>
           <Button>Go to Checkout</Button>
        </CartPopoverContainer>
    )
}

export default CartPopover
const CartPopoverContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`