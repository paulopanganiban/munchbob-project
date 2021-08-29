import React from 'react'
import styled from 'styled-components'

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <h1 style={{ padding: 10 }}>{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <>
                            <div key={item.id}>{item.name}</div>
                            <img style={{height: 125}}src={item.imageUrl} alt={item.name}/>
                        </>
                    ))
                }
            </div>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview
const CollectionPreviewContainer = styled.div`

`
