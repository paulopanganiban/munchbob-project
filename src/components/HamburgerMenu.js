import React from 'react'
import styled from 'styled-components'

const HamburgerMenu = ({ isOpen }) => {
    return (
        <HamburgerMenuContainer isOpen={isOpen}>
            hi
        </HamburgerMenuContainer>
    )
}

export default HamburgerMenu
const HamburgerMenuContainer = styled.aside`
position: fixed;
z-index: 999;
width: 400px;
height: 100%;
background: white;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
