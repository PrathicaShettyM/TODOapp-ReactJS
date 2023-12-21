import Todo from '../Todo/Todo';
import './TodoList.css'

function TodoList({ todos }){
    return(
        todos && todos.map(
            (todo) => <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished} 
        />)
    );
}
export default TodoList;