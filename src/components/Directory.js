import React, { useState } from 'react'
import styled from 'styled-components';
import { sections } from '../directory.data';
import MenuItem from './MenuItem'

  
const Directory = () => {
    const [state, setstate] = useState(sections)
    return (
        <DirectoryContainer>
            {
                state.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
                  ))
            }
        </DirectoryContainer>
    )
}

export default Directory

const DirectoryContainer = styled.div`
display: flex;
overflow-x: auto;
`