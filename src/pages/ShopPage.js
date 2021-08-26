import React, { useState } from 'react'
import CollectionPreview from '../components/CollectionPreview'
import SHOP_DATA from '../shop.data'

const ShopPage = () => {
    const [state, setstate] = useState(SHOP_DATA)
    return (
        <div>
            {
                state.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default ShopPage
