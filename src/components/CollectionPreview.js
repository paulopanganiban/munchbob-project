import React from 'react'
import styled from 'styled-components'
import { Card, Button } from 'antd';

const { Meta } = Card;
const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <h1 style={{ padding: 10 }}>{title}</h1>
            <CollectionPreviewWrapper>
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <>
                            <CardContainer>
                                <Card
                                    key={item.id}
                                    hoverable
                                    style={{ width: '85%' }}
                                    cover={<img alt={item.title} src={item.imageUrl} />}
                                >
                                    <CardMetaContainer>
                                        <Meta title={item.name}/>
                                        <Button>Add to Cart</Button>
                                    </CardMetaContainer>
                                    <p>PHP {item.price}</p>
                                </Card>
                            </CardContainer>

                        </>
                    ))
                }
            </CollectionPreviewWrapper>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview
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
const CollectionPreviewWrapper = styled.div`

`
const CollectionPreviewContainer = styled.div`

`
