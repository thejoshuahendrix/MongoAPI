import React, { useEffect, useState } from 'react'
import CardDeletable from './CardDeleteable';

const TodoList = () => {
    const [todos, settodos] = useState([])

    useEffect(() => {
        getData();
    }, [todos]);


    async function getData() {
        let response = await fetch(`http://localhost:4000/`)
        let data = await response.json();
        settodos(data);
    }



    return (
        <div>
            {todos.map(todo => {
                return (
                    <CardDeletable key={todo._id} identifier={todo._id} content={todo.name} heading={todo.date} body={todo.todo} />
                )
            })}
        </div>
    )
}

export default TodoList
