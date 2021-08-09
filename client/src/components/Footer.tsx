import React from 'react'
import styled from 'styled-components'

const FootWrapper = styled.div`
    background-color:#151515;
    padding: 40px;
    bottom:0;
    position:relative;
    display:block;
    
`

const Footer = () => {
    return (
        <FootWrapper>
            Hendrix Software 2021©
        </FootWrapper>
    )
}

export default Footer
