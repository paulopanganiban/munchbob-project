import React from 'react'
import styled from 'styled-components'
import CollectionItem from './CollectionItem';
const CollectionPreview = ({ title, items, homepage }) => {
    return (
        <CollectionPreviewContainer>
            {
                homepage ? null : (<h1 style={{ padding: 10 }}>{title}</h1>)
            }

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
