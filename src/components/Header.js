import React from 'react'
import styled from 'styled-components'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Logo from '../assets/logolas.png'
import Logo2 from '../assets/header.png'
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
            <MenuOutlined style={{color: 'white', fontSize: 20}}/>
            </HeaderLeft>
            <HeaderMiddle>
            <StyledImg src={Logo2} alt=""  style={{marginTop: 3}}/>
            </HeaderMiddle>
            <HeaderRight>
        <ShoppingCartOutlined style={{color: 'white', fontSize: 30, padding: '10px 10px'}}/>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const StyledImg = styled.img`
margin-right: auto;
height: 50px;
padding: 10px 10px;
`
const HeaderLeft = styled.div`
flex: 0.2;
padding: 10px 10px;
display: flex;
align-items: center;
`
const HeaderMiddle = styled.div`
display: flex;
margin-right: auto;`
const HeaderRight = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
background-color: #d52027;
`