import React from 'react'
import styled from 'styled-components'
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartReducer';

const { Meta } = Card;
const CollectionItem = ({item}) => {
    const dispatch = useDispatch()
    return (
        <CardContainer>
        <Card
            key={item.id}
            hoverable
            style={{ width: '85%' }}
            cover={<img alt={item.title} src={item.imageUrl} />}
        >
            <CardMetaContainer>
                <Meta title={item.name}/>
                <Button
                onClick={() => {dispatch(addItem(item))}}
                >Add to Cart</Button>
            </CardMetaContainer>
            <p>PHP {item.price}</p>
        </Card>
    </CardContainer>
    )
}

export default CollectionItem
const CardMetaContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const CardContainer = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`