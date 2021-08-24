import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                navbar button
            </HeaderLeft>
            <HeaderMiddle>
                address
            </HeaderMiddle>
            <HeaderRight>
                avatar
                <span>cart</span>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const HeaderLeft = styled.div``
const HeaderMiddle = styled.div``
const HeaderRight = styled.div``
const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
`