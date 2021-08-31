import { Badge, Popover } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CartPopover from './CartPopover'
import { useSelector } from 'react-redux'
const ShoppingIcon = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <ShoppingIconContainer>
            <Popover placement="bottomRight" title={'Recently Added Products'} content={<CartPopover/>}>
                <ShoppingWrapper>
                    <ShoppingCartOutlined style={{ color: 'white', fontSize: 30, padding: '10px 10px' }} />
                    <Badge count={1}
                        offset={[-15, -15]}
                        style={{ backgroundColor: '#52c41a' }}
                    />
                </ShoppingWrapper>

            </Popover>
        </ShoppingIconContainer>
    )
}

export default ShoppingIcon
const ShoppingWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ShoppingIconContainer = styled.div``
