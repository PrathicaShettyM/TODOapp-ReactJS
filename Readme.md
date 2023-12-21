 # Logic of the TodoApp
 1.  TodoList function expects a todos array of todo list
 ```
 function TodoList({ todos }){
    return(
        <></>
    )
}
 ```
2. The function Todo expects 2 props -> text, isFinished. Then return the components as shown below
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











### To execute the application
  cd TodoApp
  npm run dev