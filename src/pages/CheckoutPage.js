import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CheckoutItem from '../components/CheckoutItem'
import CurrencyFormat from 'react-currency-format'
import StripeButton from '../components/StripeButton'
const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartItemsTotalPrice = cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
    return (
        <CheckoutPageContainer>
            <TotalContainer>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <h3>Order Total: {value}</h3>
                        </>
                    )}
                    decimalScale={2}
                    value={cartItemsTotalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Php "}
                />
            </TotalContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                ))
            }
            <StripeButtonWrapper>
                <StripeButton price={cartItemsTotalPrice} />
            </StripeButtonWrapper>
        </CheckoutPageContainer>
    )
}

export default CheckoutPage
const StripeButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const TotalContainer = styled.div`
padding: 10px;
`
const CheckoutPageContainer = styled.div`

`