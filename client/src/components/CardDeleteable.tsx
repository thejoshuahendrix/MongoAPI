import React, { useEffect, useState } from 'react'
import styled from 'styled-components';




const Container = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #363636;
    font-size: 1rem;
    margin: 2rem 2rem 2rem 2rem;
    align: vertical;
    padding: 2rem;
    text-align:center;
    box-shadow: 30px 30px 30px rgba(0,0,0,0.2);
`;




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
   
`

const Article = styled.div<{ active: boolean }>`    
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 2rem;
    background-color:#222;
    align:vertical;
   
`

type CardType = {
    heading: string;
    body: string;
    content: string;
    key: string;
    identifier: string;
};


const CardDeletable = (props: CardType) => {
    const [active, setActive] = useState(true);
    
    async function handleClick(){
        await fetch(`http://localhost:4000/${props.identifier}`, {
            method: 'DELETE'
        })
        setActive(!active);
    }

    return (
        <Container active={active}>

            <Content>{props.body}</Content>

            <Article>{props.content}</Article>

            <Heading>{props.heading}</Heading>
            <button onClick={handleClick}>X</button>
            </Container>

    )
};

export default CardDeletable
