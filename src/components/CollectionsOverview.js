import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from './CollectionPreview'

const CollectionsOverview = () => {
    const state = useSelector(state => state.shop.collections)
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

export default CollectionsOverview
