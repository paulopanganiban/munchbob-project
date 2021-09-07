import React from 'react'
import styled from 'styled-components'
import { MenuOutlined} from '@ant-design/icons'
import Logo2 from '../assets/header.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHamburger } from '../redux/headerReducer'
import HamburgerMenu from './HamburgerMenu'
import ShoppingIcon from './ShoppingIcon'
import { withRouter } from 'react-router-dom'
const Header = ({ history }) => {
    const dispatch = useDispatch()
    const hamburgerHidden = useSelector(state => state.header.hidden)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <MenuOutlined style={{ color: 'white', fontSize: 20 }}
                    onClick={() => dispatch(toggleHamburger())}
                />
                {
                    // TODO: Finish this later.
                    hamburgerHidden ? (<HamburgerMenu isOpen={hamburgerHidden} />) : (null)
                }
            </HeaderLeft>
            <HeaderMiddle>
                <StyledImg src={Logo2} alt="" style={{ marginTop: 3 }}
                    onClick={() => history.push('/')}
                />
            </HeaderMiddle>
            <HeaderRight>
                <HeaderWrapper>
                    <ShoppingIcon />
                </HeaderWrapper>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default withRouter(Header)
const HeaderWrapper = styled.div`
`
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
z-index: 100;
position: sticky;
top: 0;
display: flex;
justify-content: space-between;
background-color: #d52027;
`