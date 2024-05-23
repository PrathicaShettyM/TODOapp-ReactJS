import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'
import TodoReducer from './reducer/TodoReducer'

function App() {

  // with reducer we dont need this: const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(TodoReducer, []); // []: initial state

  // to trigger the action we use dispatch. It takes only 1 plain js object
  // so we need to pass an object with type and payload property
  
  
  return (
    <div>
      <TodoContext.Provider value={{todos,dispatch}}> 
        <AddTodo/>
        <TodoList/>
      </TodoContext.Provider>
      </div>
  )
}

export default App;
