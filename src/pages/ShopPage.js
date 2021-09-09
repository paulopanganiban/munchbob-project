import React, { useEffect } from 'react'
import CollectionsOverview from '../components/CollectionsOverview'
import { Route } from 'react-router-dom'
import CollectionPage from './CollectionPage'
import { convertCollectionsSnapshotToMap, db } from '../firebase'
import { useDispatch } from 'react-redux'
import { updateCollections } from '../redux/shopReducer'

const ShopPage = ({ match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const collectionRef = db.collection('collections')
        // whenever the collection ref updates
        // onSnapshot will send us the data
        const unsubscribe = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(updateCollections(collectionsMap))
        })
        return unsubscribe
    }, [])
    return (
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage
