import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, text: 'todo 1', isFinished: true},
    {id: 1, text: 'todo 1', isFinished: false}
  ])
 
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
