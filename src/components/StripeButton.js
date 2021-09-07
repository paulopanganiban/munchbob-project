import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeButton = ({price}) => {
    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IipzeJk62S2zIHk1wU76WyYEk0btPOCpD2nBEwPYdWK315tizfJpzMFmX404BidelFBaFBJsGkKDhz6H1qzE7rk00MLPcaPwK'
    return (
        <div>
            <StripeCheckout
            label='Pay Now'
            name='Munch Bob'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is Php ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency={'Php'}
            />
        </div>
    )
}

export default StripeButton
