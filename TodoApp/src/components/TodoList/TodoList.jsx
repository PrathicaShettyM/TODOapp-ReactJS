import Todo from '../Todo/Todo';
import './TodoList.css'

function TodoList({ todos, setTodos }){


    function onDeleteTodo(id){
        // delete logic : create a new array which contains all the elements other than the one mentioned as "id" in the parameter
        // then set the state as this new array
        const newTodoList = todos.filter(todo => todo.id != id)
        setTodos(newTodoList)
    }

    function onEditTodo(id, newTodo){
        const newTodoList = todos.map(todo => {
            if(todo.id == id){
                todo.text = newTodo;
            }
            return todo;
        })
        setTodos(newTodoList)
    }

    function onFinishTodo(id, state){
        const newTodoList = todos.map(todo => {
            if(todo.id == id){
                todo.isFinished = state;
            }
            return todo;
        })
        setTodos(newTodoList)
    }

    return(
        todos && todos.map(
            (todo) => <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished} 
                        editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
                        deleteTodo={() => onDeleteTodo(todo.id)}
                        finishTodo={(state) => onFinishTodo(todo.id, state)}
                        />)
    );
}
export default TodoList;