import React from 'react'
import { useState } from 'react';
import { useInput } from '../hooks';
import { Container } from './Card';

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
                <label>
                    First Name:
                    <input type="text" {...bindName} />
                </label>
                <br />
                <label>
                    Todo:
                    <input type="text" {...bindTodo} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </Container>
    )
}

export default Form
