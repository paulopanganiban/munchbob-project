import React from 'react'
import styled from 'styled-components'
import HeroImgz from '../assets/munchbob-hero.jpg'
const Hero = () => {
    return (
        <HeroContainer>
            <HeroImg src={HeroImgz}/>
        </HeroContainer>
    )
}

export default Hero
const HeroImg = styled.img`
object-fit: contain;
width: 100%;
`
const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 1;
`