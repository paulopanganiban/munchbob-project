import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { toggleHamburger } from '../redux/headerReducer'
import { motion } from 'framer-motion'
import { signOut } from '../firebase'
const HamburgerMenu = ({ isOpen, history }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    return (
        <HamburgerMenuContainer isOpen={isOpen}
            onClick={() => dispatch(toggleHamburger())}
        >
            <HamburgerMenuWrapper>
                {
                    currentUser ?
                        (
                            <StyledButton
                                onClick={() => {signOut()}}
                            >Sign out</StyledButton>
                        ) : 
                        (
                            <StyledButton
                            onClick={() => history.push('/signin')}
                        >Sign in</StyledButton>
                        )
                }
            </HamburgerMenuWrapper>
        </HamburgerMenuContainer>
    )
}

export default withRouter(HamburgerMenu)
const StyledButton = styled(Button)`
width: 80%;
`
const HamburgerMenuWrapper = styled.div`
padding: 10px;
display: flex;
justify-content: center;
`
const HamburgerMenuContainer = styled(motion.aside)`
position: fixed;
z-index: 999;
width: 400px;
height: 100%;
background: white;
display: grid;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
