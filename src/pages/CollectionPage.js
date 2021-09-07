import MenuItem from 'antd/lib/menu/MenuItem'
import React from 'react'
import { useSelector } from 'react-redux'
import CollectionItem from '../components/CollectionItem'
import CollectionPreview from '../components/CollectionPreview'

const CollectionPage = ({match}) => {
    const collections = useSelector(state => state.shop.collections)
    const collection = useSelector(state => state.shop.collections[match.params.collectionId])
    return (
        <div className='collection-page'>
        <div className="items">
            <h1
            style={{padding: 10}}
            >
            {match.params.collectionId.toUpperCase()}
            </h1>
            {
                collection.items?.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
    )
}

export default CollectionPage
