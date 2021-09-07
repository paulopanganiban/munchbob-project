import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from './CollectionPreview'

const CollectionsOverview = () => {
    const collections = useSelector(state => state.shop.collections)
    const collectionsArray = Object.keys(collections).map(key => collections[key])
    return (
        <div>
              {
                collectionsArray.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }  
        </div>
    )
}

export default CollectionsOverview
