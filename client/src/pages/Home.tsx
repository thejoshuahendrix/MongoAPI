import React from 'react'

import Form from '../components/Form'
import TodoList from '../components/TodoList'


const Home = () => {
    
    return (
        <div>
            <h1>Welcome to Hendrix Software's simple React App!</h1>
            <p>This was built with React and Typescript</p>
            <Form />
            <TodoList />
        </div>
        
    )
}

export default Home
