import React from 'react'
import styled from 'styled-components'
// higher order component
// we have access to history
import { withRouter } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
    return (
        <MenuItemContainer
            onClick={() => { history.push(`${match.url}${linkUrl}`) }}
        >
            <MenuItemWrapper>
                <AvatarImage src={imageUrl} />
                    <h1 className="title">{title}</h1>
                <MenuItemInner>
                    <ArrowRightOutlined style={{ color: 'white' }} />
                </MenuItemInner>

            </MenuItemWrapper>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)
const MenuItemInner = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
margin-bottom: 10px;
`
const MenuItemWrapper = styled.div`
border-radius: 10px;
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