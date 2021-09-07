import { ReactComponent as CloseIcon } from '../assets/x.svg'
import { ReactComponent as PlusIcon } from '../assets/plus-circle-fill.svg'
import { ReactComponent as MinusIcon } from '../assets/dash-circle-fill.svg'
import { InputNumber } from 'antd';
import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addItem, clearItemFromCart, removeItem, removeItemFromCart } from '../redux/cartReducer';
const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch()
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
            <CardContainer>
                <CardWrapperLeft>
                    <Image src={imageUrl} /> 
                </CardWrapperLeft>
                <CardWrapperRight>
                    <CardWrapperRightUpper>
                        <h3>{name}</h3>
                        <StyledCloseIcon 
                        onClick={() => {dispatch(clearItemFromCart(cartItem))}}
                        />
                    </CardWrapperRightUpper>
                    <CardWrapperRightLower>
                        <QuantityContainer>
                            {/*  */}
                            <MinusIcon 
                            onClick={() => {dispatch(removeItem(cartItem))}}
                            />
                            <h2 style={{ margin: '0px 10px' }}>{quantity}</h2>
                            <PlusIcon 
                             onClick={() => {dispatch(addItem(cartItem))}}
                            />
                        </QuantityContainer>
                        <CardWrapperRightLowerPrice>
                            <h2 style={{ margin: '0px 10px' }}>Php {price}</h2>
                        </CardWrapperRightLowerPrice>
                    </CardWrapperRightLower>
                </CardWrapperRight>
            </CardContainer>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem

const QuantityContainer = styled.div`
display: flex;
align-items: center;
`
const CardWrapperRightLowerPrice = styled.div`

`
const StyledCloseIcon = styled(CloseIcon)`
fill: red;
width: 32px;
height: 32px;
margin-right: 5px;
margin-bottom: 2px;
cursor: pointer;
`
const CardWrapperRightLower = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const CardWrapperRightUpper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
const CardWrapperRight = styled.div`
padding: 5px;
width: 80%;
`
const CardWrapperLeft = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 120px;
padding: 5px;
`
const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  width: 92%;
  height: 127px;
  align-items: center;
  border-radius: 10px;
  max-width: 327px;
`
const Image = styled.img`
height: 80px;
max-width: 80px;
object-fit: contain;
`
const CheckoutItemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`