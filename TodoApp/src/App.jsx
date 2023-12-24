import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'

function App() {

  const [todos, setTodos] = useState([])
 
  return (
    <div>
      <TodoContext.Provider value={{todos, setTodos}}> 
        <AddTodo/>
        <TodoList/>
      </TodoContext.Provider>
      </div>
  )
}

export default App
