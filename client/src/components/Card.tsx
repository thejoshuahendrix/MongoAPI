import React, { useState } from 'react'
import styled from 'styled-components';




export const Container = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #161616;
    font-size: 1rem;
    margin: 2rem 2rem 2rem 2rem;
    align: vertical;
    padding: 2rem;
    text-align:center;
    box-shadow: ${({ active }) => active ? '10px 10px 10px rgba(0,0,0,0.1)' : '30px 30px 30px rgba(0,0,0,0.2)'};
`;




const ToggleButton = styled.div<{ active: boolean }>`
    background-color: ${({ active }) => active ? 'gray ' : 'lime'};
    width: 100px;
    height: 20px;
    position: relative;
    margin: 2rem;
    border-radius: 20px;
    border: 1px solid black;
    overflow:hidden;
    &:after {
        content:'';
        position: absolute;
        top:0;
        ${({ active }) => active ? 'left:0px;' : 'left: calc(100% - 20px);'};
        height:20px;
        width:20px;
        border-radius: 50%;
        border: 1px solid black;
        background-color:${({ active }) => active ? 'gray ' : 'lime'};
        transition: 500ms left;
    }

`

const Heading = styled.div`
    font-family: monospace;
    font-size:1rem;
    padding:2rem;

`

const Content = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 2rem;
    font-weight:700;
    background-color:#666;
    color: rgb(10, 169, 197);
    opacity: ${({ active }) => active ? '0.0 ' : '1.0'};
`

const Article = styled.div<{ active: boolean }>`    
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 2rem;
    background-color:#222;
    align:vertical;
    opacity: ${({ active }) => active ? '0.0' : '1.0'};
`

type CardType = {
    heading: string;
    body: string;
    content: string;
};


const Card = (props: CardType) => {
    const [active, setActive] = useState(true);

    return (
        <Container active={active}>

            <Content>{props.body}</Content>

            <Article>{props.content}</Article>

            <Heading>{props.heading}</Heading>

            <ToggleButton onClick={() => { setActive(!active) }} active={active} />
        </Container>

    )
};

export default Card
