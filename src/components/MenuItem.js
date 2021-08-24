import React from 'react'
import styled from 'styled-components'

const MenuItem = ({ title, imageUrl }) => {
    return (
        <MenuItemContainer>
            <MenuItemWrapper>
                <AvatarImage src={imageUrl} />
                <h1 className="title">{title}</h1>
                <span className="subtitle">Arrow</span>
            </MenuItemWrapper>
        </MenuItemContainer>
    )
}

export default MenuItem
const MenuItemWrapper = styled.div`
margin: 10px 10px;
width: 120px;
height: 180px;
background-color: #C8161D;
display: flex;
align-items: center;
flex-direction: column;
 > h1 {
     font-size: 15px;
     color: white;
 }
`
const AvatarImage = styled.img`
height: 100%;
width: 80px;
object-fit: contain;
`
const MenuItemContainer = styled.div`
display: flex;
`