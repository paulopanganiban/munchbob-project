import React from 'react'

const CollectionPreview = ({ title, items }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
