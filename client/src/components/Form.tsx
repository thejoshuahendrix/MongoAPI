import React from 'react'
import { useState } from 'react';
import { FormGroup } from 'reactstrap';
import { useInput } from '../hooks';
import { Container } from './Card';
import styled from 'styled-components';

const Input = styled.input`
    width: 200px;
    height: 75px;

`



const Form = () => {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: todo, bind: bindTodo, reset: resetTodo } = useInput('');
    const [completed, setCompleted] = useState(false);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const todoItem = { name, todo, completed };
        fetch('http://localhost:4000', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoItem)
        })
        resetName();
        resetTodo();
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <label>
                        Name:
                        <Input type="text" {...bindName} />
                    </label>
                </FormGroup>

                <br />
                <FormGroup>
                <label>
                    Todo:
                    <input style={{ width: 200, height: 75, fontSize: 32, borderRadius: 10 }} type="text" {...bindTodo} />
                </label>
                </FormGroup>
                <br />
                <FormGroup>
                <input style={{ color:"#FF22FF", backgroundColor:"#00FF00",float:"right",marginRight:10, width: 200, height: 75, fontSize: 32, borderRadius: 10 }} type="submit" value="Submit" />
                </FormGroup>
            </form>
        </Container>
    )
}

export default Form
