 # Logic of the TodoApp
 1.  TodoList function expects a todos `array of todo list`
 ```
 function TodoList({ todos }){
    return(
        <></>
    )
}
 ```
2. The function Todo expects 2 props -> `text`, `isFinished`. Then return the components as shown below
```
function Todo({text, isFinished}){
    return(
        <div>
            <input type="checkbox" checked={isFinished}/>
            <span> {text} </span>
            <button> Edit </button>
            <button> Delete </button>
        </div>
    )
}
```
3. In this function, if `todos` is present and {`&&`} we will iterate through this todos{`todo.map()`}.
for every item `todo`(`(todo) =>`) render a <Todo/> component which has a key, text and isFinished function.
```
function TodoList({ todos }){
    return(
        {todos && todos.map((todo) => <Todo key={todo.id} text={todo.text} isFinished={todo.isFinished} />)}
    )
}
```
4. Now in `App.jsx`, create a dummy `todos` array and pass it to the `TodoList` as a prop parameter. Now it renders the component on the screen.
```
 const todos =[
    {id: 1, text: 'todo 1', isFinished: true},
    {id: 1, text: 'todo 1', isFinished: false}
  ]
```
```
 <TodoList todos={todos}/>
```
4. create a new component `AddTodo` with an `AddTodo` function, which takes an event `onChange` (event) which sets `setTodoText()` method which takes the input value `(event.target.value)` and `value` is set to `todoText` 
- For the `onClick()` event, set the "prop" `addTodo()` to `todoText` and set the function `setTodoText('')` as empty string
```
function AddTodo({addTodos}){
    
    const [todoText, setTodoText] = useState('');
    
    return(
        <>
            <input 
            placeholder="Add your next todo ..."
            onChange={(event) => setTodoText(event.target.value)}
            value={todoText}   
            />        

            <button onClick={()=>{
                addTodos(todoText);
                setTodoText('')
            }}>
                    Submit
            </button>
        </>
    )
}
```
5. In the new function `addTodo()` it expects a parameter todoText. 
- The setter function `setTodos()` expects an array, with previously set destructured todolist(...todos) along with a new object which expects all the todo Array components(id, isFinished, text)
```
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
    <>
      <AddTodo addTodos={addTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

```
6. 

 <TodoContext.Provider> : this is a special component and whichever component is wrapped inside it, all of these componets have access to todo context or the common todo decument

   <TodoContext.Provider value={{todos, setTodos}}> 
        <AddTodo addTodos={addTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </TodoContext.Provider>
      : now `{todos, setTodos}` is accessible by <AddTodo> and <TodoList>
      hence we dont need any props in these 2 components



### To execute the application
  cd TodoApp
  npm run dev


### Reducer
- It is a plain function
- It takes 2 parameters: 
1. It takes the `state` of an array or some part of state: todos
2. takes `action`: Action is nothing but a simple plain js object

- an object has: 
- `type` and `payload`
1. action property <string> type -> identify the task to be performed
2. parameters needed to complete task will be stored in a property called `payload`: () another object
```
{
  type: <String>
  payload: ()
}
```
- The reducer takes the `state` of the app and `action` of the app and returns a new state 