import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CollectionItem from '../components/CollectionItem'
import CollectionPreview from '../components/CollectionPreview'
import Directory from '../components/Directory'
import Hero from '../components/Hero'
import MenuItem from '../components/MenuItem'

const HomePage = () => {
    const collections = useSelector(state => state.shop.collections)
    const collectionsArray = collections ? Object.keys(collections).map(key => collections[key]): []
    return (
        <HomePageContainer>
            <Hero />
            <Directory />
            <HeaderText>BEST SELLERS</HeaderText>
            {
                collectionsArray.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} homepage={true}/>
                ))
            }  
        </HomePageContainer>
    )
}

export default HomePage
const HeaderText = styled.h1`
padding-top: 10px;
display: flex;
align-items: center;
justify-content: center;
`
const Content = styled.div`

`
const HomePageContainer = styled.div`

`
const DirectoryMenu = styled.div`

`