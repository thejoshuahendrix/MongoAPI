import React from 'react';
import styled from 'styled-components';


const HeroContainer = styled.div`
    background-color:black;
    width:100vw;
    height:40vh;
    overflow:hidden;
`

const Hero = () => {
    return (
        <HeroContainer>
            <img src="https://github.com/thejoshuahendrix/NewsAPI/blob/main/src/HendrixSoftware.gif?raw=true" alt="logo"></img>
        </HeroContainer>
    )
}

export default Hero
