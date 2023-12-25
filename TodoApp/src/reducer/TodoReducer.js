
function TodoReducer(state, action){
    if(action.type == 'add_todo'){
        let nextId = state.length + 1;
        return [...state, {id: nextId, text: action.payload.todoText, isFinished: false}]
    } else if(action.type == 'edit-todo'){
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id){
                todo.text = action.payload.newTodo;
            }
            return todo;
        })
        return newTodoList
    } else if(action.type == 'finish-todo'){

    }else if(action.type == 'delete-todo'){
        
    }



}
export default TodoReducer;