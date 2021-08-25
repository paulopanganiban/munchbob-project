import React from 'react'
import styled from 'styled-components'
import Directory from '../components/Directory'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import MenuItem from '../components/MenuItem'

const HomePage = () => {
    return (
        <HomePageContainer>
            <LandingPage/>
           <Directory/>
        </HomePageContainer>
    )
}

export default HomePage
const Content = styled.div`

`
const HomePageContainer = styled.div`

`
const DirectoryMenu = styled.div`

`