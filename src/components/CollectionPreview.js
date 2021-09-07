import React from 'react'
import styled from 'styled-components'
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartReducer';
import CollectionItem from './CollectionItem';

const { Meta } = Card;
const CollectionPreview = ({ title, items }) => {
    const dispatch = useDispatch()
    return (
        <CollectionPreviewContainer>
            <h1 style={{ padding: 10 }}>{title}</h1>
            <CollectionPreviewWrapper>
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <>
                            <CollectionItem key={item.id} item={item}></CollectionItem>
                        </>
                    ))
                }
            </CollectionPreviewWrapper>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview

const CollectionPreviewWrapper = styled.div`

`
const CollectionPreviewContainer = styled.div`

`
