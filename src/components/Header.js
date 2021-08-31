import React from 'react'
import styled from 'styled-components'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Logo from '../assets/logolas.png'
import Logo2 from '../assets/header.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHamburger } from '../redux/headerReducer'
import { Badge, Avatar } from 'antd'
import HamburgerMenu from './HamburgerMenu'
import { Popover, Button } from 'antd';

const Header = () => {
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
                    hamburgerHidden ? (<HamburgerMenu isOpen={false} />) : (null)
                }
            </HeaderLeft>
            <HeaderMiddle>
                <StyledImg src={Logo2} alt="" style={{ marginTop: 3 }} />
            </HeaderMiddle>
            <HeaderRight>
                {/* TODO: cart into separate component */}
                <HeaderWrapper>
                    {/* <Badge size='large' count={5} color='green'
                        style={{ backgroundColor: '#52c41a' }}>
                    </Badge> */}
                    <Popover placement="bottomRight" title={'Test'} content={'content'} 
                    offset={[10,10]}
                    >
                        <ShoppingCartOutlined style={{ color: 'white', fontSize: 30, padding: '10px 10px' }} />
                    </Popover>

                </HeaderWrapper>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
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
display: flex;
justify-content: space-between;
background-color: #d52027;
`