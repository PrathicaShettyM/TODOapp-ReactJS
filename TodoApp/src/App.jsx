import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'


function App() {

  const [todos, setTodos] = useState([
    {id: 1, text: 'todo 1', isFinished: true},
    {id: 1, text: 'todo 1', isFinished: false}
  ])

  function addTodos(todoText){
    let nextId = todos.length + 1;
    setTodos([...todos, {id: nextId, isFinished: false, text: todoText}])
  }

 
  return (
    <div>
      <AddTodo addTodos={addTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
