import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MenuItem from './MenuItem'

  
const Directory = () => {
    const directory = useSelector(state => state.directory.sections)
    return (
        <DirectoryContainer>
            {
                directory.map(({id, ...otherSectionProps}) => (
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